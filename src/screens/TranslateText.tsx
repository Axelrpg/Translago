import React, { useEffect, useRef } from 'react';
import { Appearance, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, TextInput } from 'react-native-paper';
import { styles } from '../styles/Styles';
import { RootStackParamList } from '../navigation/Navigation';
import { darkColors } from '../colors/DarkColors';
import { lightColors } from '../colors/LightColors';

type TranslateTextRouteProp = RouteProp<RootStackParamList, 'Text'>;

type TranslateTextProps = {
    route: TranslateTextRouteProp;
};

export const TranslateText: React.FC<TranslateTextProps> = () => {

    const { params } = useRoute<TranslateTextRouteProp>();
    const { text, setText } = params;

    const navigation = useNavigation();

    const currentStyle = Appearance.getColorScheme();
    const colors = currentStyle === 'dark' ? darkColors : lightColors;

    return (
        <View style={styles.homeContainer}>
            <Appbar.Header style={styles.appbarHeader}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
            </Appbar.Header>

            <View style={styles.homeFirstContainer}>
                <TextInput
                    label={'Enter text to translate'}
                    mode='outlined'
                    multiline={true}
                    numberOfLines={5}
                    value={text}
                    selectionColor={colors.primaryText.color}
                    textColor={colors.primaryText.color}
                    underlineColor={colors.secondaryBackground.color}
                    activeUnderlineColor={colors.secondaryBackground.color}
                    outlineColor={colors.primaryText.color}
                    activeOutlineColor={colors.primaryText.color}
                    style={{
                        backgroundColor: colors.primaryBackground.color,
                    }}
                    focusable={true}
                    onChangeText={text => setText(text)}
                />
            </View>
        </View>
    );
}