import React from 'react';
import { List } from 'react-native-paper';
import { darkColors } from '../colors/DarkColors';
import { Appearance } from 'react-native';
import { lightColors } from '../colors/LightColors';

type LanguageListItemProps = {
    isOriginal: boolean;
    originalLenguage: string;
    translatedLanguage: string;
    title: string;
    onPress: () => void;
    setOriginalLanguage: (language: string) => void;
    setTranslatedLanguage: (language: string) => void;
};

export const LanguageListItem: React.FC<LanguageListItemProps> = ({
    isOriginal,
    originalLenguage,
    translatedLanguage,
    title,
    onPress,
    setOriginalLanguage,
    setTranslatedLanguage
}) => {

    const language = isOriginal ? originalLenguage : translatedLanguage;

    const colors = Appearance.getColorScheme() === 'dark' ? darkColors : lightColors;

    return (
        <List.Item
            title={title}
            left={props =>
                language === title ? <List.Icon {...props} icon='check' /> : null
            }
            style={{
                backgroundColor:
                    language === title
                        ? colors.secondaryBackground.color
                        : 'transparent',
                borderRadius:
                    language === title
                        ? 20
                        : 0
            }}
            onPress={() => {
                if (isOriginal) {

                    if (title === translatedLanguage) {
                        setTranslatedLanguage(originalLenguage);
                    }
                    setOriginalLanguage(title);

                } else {

                    if (title === originalLenguage) {
                        setOriginalLanguage(translatedLanguage);
                    }
                    setTranslatedLanguage(title);
                }

                onPress();
            }}
        />
    );
}