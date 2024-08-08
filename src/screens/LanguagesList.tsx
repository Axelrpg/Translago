import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
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

    const lenguagesList = [
        'Afrikaans',
        'Albanian',
        'Amharic',
        'Arabic',
        'Armenian',
        'Azerbaijani',
        'Basque',
        'Belarusian',
        'Bengali',
        'Bosnian',
        'Bulgarian',
        'Catalan',
        'Cebuano',
        'Chichewa',
        'Chinese (Simplified)',
        'Chinese (Traditional)',
        'Corsican',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
        'English',
        'Esperanto',
        'Estonian',
        'Filipino',
        'Finnish',
        'French',
        'Frisian',
        'Galician',
        'Georgian',
        'German',
        'Greek',
        'Gujarati',
        'Haitian Creole',
        'Hausa',
        'Hawaiian',
        'Hebrew',
        'Hindi',
        'Hmong',
        'Hungarian',
        'Icelandic',
        'Igbo',
        'Indonesian',
        'Irish',
        'Italian',
        'Japanese',
        'Javanese',
        'Kannada',
        'Kazakh',
        'Khmer',
        'Kinyarwanda',
        'Korean',
        'Kurdish (Kurmanji)',
        'Kyrgyz',
        'Lao',
        'Latin',
        'Latvian',
        'Lithuanian',
        'Luxembourgish',
        'Macedonian',
        'Malagasy',
        'Malay',
        'Malayalam',
        'Maltese',
        'Maori',
        'Marathi',
        'Mongolian',
        'Myanmar (Burmese)',
        'Nepali',
        'Norwegian',
        'Odia (Oriya)',
        'Pashto',
        'Persian',
        'Polish',
        'Portuguese',
        'Punjabi',
        'Romanian',
        'Russian',
        'Samoan',
        'Scots Gaelic',
        'Serbian',
        'Sesotho',
        'Shona',
        'Sindhi',
        'Sinhala',
        'Slovak',
        'Slovenian',
        'Somali',
        'Spanish',
        'Sundanese',
        'Swahili',
        'Swedish',
        'Tajik',
        'Tamil',
        'Tatar',
        'Telugu',
        'Thai',
        'Turkish',
        'Turkmen',
        'Ukrainian',
        'Urdu',
        'Uyghur',
        'Uzbek',
        'Vietnamese',
        'Welsh',
        'Xhosa',
        'Yiddish',
        'Yoruba',
        'Zulu',
    ];

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
                    lenguagesList.map((language, index) => (
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
