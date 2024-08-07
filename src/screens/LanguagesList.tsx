import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { AppbarComponent } from '../components/AppbarComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LanguageListItem } from '../components/LanguageListItem';
import { styles } from '../styles/Styles';
import { Appbar } from 'react-native-paper';

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

    return (
        <SafeAreaView style={styles.homeContainer}>

            <Appbar.Header
                mode='large'
                style={styles.appbarHeader}
            >
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title={'Select a language'}
                />
            </Appbar.Header>

            <ScrollView
                style={{
                    padding: 10
                }}
            >
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='English'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Spanish'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Chinese'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='German'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='French'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Italian'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Portuguese'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Russian'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Japanese'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Korean'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Arabic'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
                <LanguageListItem
                    isOriginal={isOriginal}
                    originalLenguage={originalLanguage}
                    translatedLanguage={translatedLanguage}
                    title='Hindi'
                    onPress={() => navigation.goBack()}
                    setOriginalLanguage={setOriginalLanguage}
                    setTranslatedLanguage={setTranslatedLanguage}
                />
            </ScrollView>

        </SafeAreaView>
    );
}
