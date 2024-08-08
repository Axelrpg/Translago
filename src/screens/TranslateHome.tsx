import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Appearance, Keyboard, View } from 'react-native';
import { Appbar, Button, Divider, IconButton, Text, TextInput } from 'react-native-paper';
import { API_KEY } from '../../config';
import { TranslationInterface } from '../interfaces/TranslationInterface';
import { darkColors } from '../colors/DarkColors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import { getLanguageCode } from '../helpers/GetLanguageCode';
import { styles } from '../styles/Styles';
import { lightColors } from '../colors/LightColors';

type TranslateNavigationProps = StackNavigationProp<RootStackParamList, 'Translate'>;

export const TranslateHome: React.FC = () => {

    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const [originalLanguage, setOriginalLanguage] = useState('Spanish');
    const [translatedLanguage, setTranslatedLanguage] = useState('English');

    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation<TranslateNavigationProps>();

    const currentStyle = Appearance.getColorScheme();
    const colors = currentStyle === 'dark' ? darkColors : lightColors;

    const translateText = async () => {
        try {
            setLoading(true);

            const sourceLanguage = getLanguageCode(originalLanguage);
            const targetLanguage = getLanguageCode(translatedLanguage);

            await axios.post<TranslationInterface>('https://translation.googleapis.com/language/translate/v2', null, {
                params: {
                    q: text,
                    source: sourceLanguage,
                    target: targetLanguage,
                    format: 'text',
                    key: API_KEY
                }
            })
                .then((response) => {
                    console.log(response.data.data.translations[0].translatedText);
                    setTranslatedText(response.data.data.translations[0].translatedText);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    const swapLanguages = () => {
        if (originalLanguage !== 'Detect language') {
            const original = originalLanguage;
            const translated = translatedLanguage;

            setOriginalLanguage(translated);
            setTranslatedLanguage(original);
        }
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={styles.homeContainer}>

            <Appbar.Header
                mode='center-aligned'
                style={styles.appbarHeader}
            >
                {
                    keyboardVisible && (
                        <Appbar.BackAction
                            iconColor={colors.primaryText.color}
                            onPress={() => Keyboard.dismiss()}
                        />
                    )
                }
                <Appbar.Content
                    title={'Translago'}
                    color={colors.primaryText.color}
                />
                {
                    text.length > 0 && (
                        <Appbar.Action
                            icon='close'
                            iconColor={colors.primaryText.color}
                            onPress={() => setText('')}
                        />
                    )
                }
            </Appbar.Header>

            <View style={styles.homeFirstContainer}>

                <TextInput
                    label={'Enter text to translate'}
                    value={text}
                    activeOutlineColor={colors.primaryText.color}
                    activeUnderlineColor={colors.secondaryBackground.color}
                    mode='outlined'
                    multiline={true}
                    numberOfLines={5}
                    outlineColor={colors.primaryText.color}
                    selectionColor={colors.primaryText.color}
                    textColor={colors.primaryText.color}
                    underlineColor={colors.secondaryBackground.color}
                    style={{
                        backgroundColor: colors.primaryBackground.color,
                    }}
                    onChangeText={text => setText(text)}
                />

                <Divider
                    bold={true}
                    style={styles.divider}
                />

                <Text style={styles.translatedText}>
                    {translatedText}
                </Text>
            </View>

            <View
                style={styles.homeButtonsContainer}
            >

                <View style={styles.homeSelectedLanguageContainer}>
                    <Button
                        labelStyle={{
                            fontSize: originalLanguage.length > 12 ? 8 : 15,
                        }}
                        mode='contained'
                        style={styles.homeSelectedLanguageButton}
                        textColor={colors.primaryText.color}
                        onPress={() => navigation.navigate('Languages', {
                            isOriginal: true,
                            originalLanguage: originalLanguage,
                            translatedLanguage: translatedLanguage,
                            setOriginalLanguage: setOriginalLanguage,
                            setTranslatedLanguage: setTranslatedLanguage
                        })}
                    >
                        {originalLanguage}
                    </Button>

                    <IconButton
                        icon='compare-horizontal'
                        iconColor={colors.primaryText.color}
                        size={25}
                        style={{
                            backgroundColor: colors.primaryBackground.color,
                            marginHorizontal: 10,
                        }}
                        onPress={swapLanguages}
                    />

                    <Button
                        labelStyle={{
                            fontSize: translatedLanguage.length > 12 ? 8 : 15,
                        }}
                        mode='contained'
                        style={styles.homeSelectedLanguageButton}
                        textColor={colors.primaryText.color}
                        onPress={() => navigation.navigate('Languages', {
                            isOriginal: false,
                            originalLanguage: originalLanguage,
                            translatedLanguage: translatedLanguage,
                            setOriginalLanguage: setOriginalLanguage,
                            setTranslatedLanguage: setTranslatedLanguage
                        })}
                    >
                        {translatedLanguage}
                    </Button>
                </View>

                {!keyboardVisible && (
                    <IconButton
                        containerColor={colors.primaryBackground.color}
                        disabled={text.length === 0}
                        icon={'translate'}
                        iconColor={colors.primaryText.color}
                        loading={loading}
                        size={65}
                        style={styles.homeTranslateButton}
                        onPress={translateText}
                    >
                    </IconButton>
                )}
            </View>
        </View>
    );
}