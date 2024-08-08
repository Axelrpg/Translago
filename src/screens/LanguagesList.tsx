import React from 'react';
import { Appearance, SafeAreaView, ScrollView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LanguageListItem } from '../components/LanguageListItem';
import { styles } from '../styles/Styles';
import { Appbar, Searchbar } from 'react-native-paper';
import { darkColors } from '../colors/DarkColors';
import { lightColors } from '../colors/LightColors';
import { lenguagesListNames } from '../helpers/LanguagesListNames';

type LanguagesListRouteProp = RouteProp<RootStackParamList, 'Languages'>;
type LanguagesListNavigationProp = StackNavigationProp<RootStackParamList, 'Languages'>;

type LanguagesListProps = {
    route: LanguagesListRouteProp;
};

export const LanguagesList: React.FC<LanguagesListProps> = () => {

    const navigation = useNavigation<LanguagesListNavigationProp>();

    const { params } = useRoute<LanguagesListRouteProp>();
    const {
        isOriginal,
        originalLanguage,
        translatedLanguage,
        setOriginalLanguage,
        setTranslatedLanguage
    } = params;

    const currentStyle = Appearance.getColorScheme();
    const colors = currentStyle === 'dark' ? darkColors : lightColors;

    const [lenguagesFilteredList, setLenguagesFilteredList] = React.useState(lenguagesListNames);

    const [searchVisible, setSearchVisible] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleBack = () => {
        if (searchVisible) {
            handleSearchToggle();
        } else {
            navigation.goBack();
        }
    };

    const handleClearIcon = () => {
        setSearchQuery('');
        filteredList('');
    };

    const handleSearchToggle = () => {
        setSearchVisible(!searchVisible);
        setSearchQuery('');
    };

    const filteredList = (query: string) => {
        if (query === '') {
            setLenguagesFilteredList(lenguagesListNames);
        } else {
            const filteredList = lenguagesListNames.filter((language) => {
                return language.toLowerCase().includes(query.toLowerCase());
            });
            setLenguagesFilteredList(filteredList);
        }

        console.log(lenguagesFilteredList);
    };

    return (
        <SafeAreaView style={styles.homeContainer}>

            <Appbar.Header
                mode='center-aligned'
                style={styles.appbarHeader}
            >
                <Appbar.BackAction
                    onPress={handleBack}
                    iconColor={colors.primaryText.color}
                />
                {
                    searchVisible
                        ? null
                        : <Appbar.Content
                            title={'Select a language'}
                        />
                }
                {
                    searchVisible ? (
                        <Searchbar
                            value={searchQuery}
                            cursorColor={colors.primaryText.color}
                            iconColor={colors.primaryText.color}
                            inputStyle={{ color: colors.primaryText.color }}
                            placeholder='Translate from...'
                            placeholderTextColor={colors.secondaryText.color}
                            style={styles.lenguagesListSearch}
                            onChangeText={(query) => {
                                setSearchQuery(query);
                                filteredList(query);
                            }}
                            onClearIconPress={handleClearIcon}
                        />
                    )
                        : <Appbar.Action
                            icon={'magnify'}
                            iconColor={colors.primaryText.color}
                            onPress={() => handleSearchToggle()}
                        />
                }
            </Appbar.Header>

            <ScrollView style={{
                paddingHorizontal: 20,
            }}>
                {
                    isOriginal ?
                        <LanguageListItem
                            isOriginal={isOriginal}
                            originalLenguage={originalLanguage}
                            translatedLanguage={translatedLanguage}
                            title='Detect language'
                            setOriginalLanguage={setOriginalLanguage}
                            setTranslatedLanguage={setTranslatedLanguage}
                        /> : null
                }
                {
                    lenguagesFilteredList.map((language, index) => (
                        <LanguageListItem
                            key={index}
                            isOriginal={isOriginal}
                            originalLenguage={originalLanguage}
                            translatedLanguage={translatedLanguage}
                            title={language}
                            setOriginalLanguage={setOriginalLanguage}
                            setTranslatedLanguage={setTranslatedLanguage}
                        />
                    ))
                }
                <View style={{ height: 10 }} />
            </ScrollView>

        </SafeAreaView>
    );
}
