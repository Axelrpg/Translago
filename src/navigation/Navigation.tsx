import { useEffect } from "react";
import { Appearance, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TranslateHome } from "../screens/TranslateHome";
import SystemNavigationBar from "react-native-system-navigation-bar";
import { LanguagesList } from "../screens/LanguagesList";
import { darkColors } from "../colors/DarkColors";
import { lightColors } from "../colors/LightColors";
import { TranslateText } from "../screens/TranslateText";

export type RootStackParamList = {
    Languages: {
        isOriginal: boolean;
        originalLanguage: string;
        translatedLanguage: string;
        setOriginalLanguage: (language: string) => void;
        setTranslatedLanguage: (language: string) => void;
    };
    Text: {
        text: string;
        setText: (text: string) => void
    };
    Translate: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {

    const style = Appearance.getColorScheme() === 'dark' ? darkColors : lightColors;

    useEffect(() => {
        StatusBar.setBackgroundColor(style.primaryBackground.color);
        StatusBar.setBarStyle(style.primaryText.color === '#FFFFFF' ? 'light-content' : 'dark-content');
    }, []);

    return (
        <Stack.Navigator
            initialRouteName="Translate"
            screenOptions={{
                cardStyle: { backgroundColor: darkColors.primaryBackground.color },
                headerShown: false,
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 300 } },
                    close: { animation: 'timing', config: { duration: 300 } }
                }
            }}
        >
            <Stack.Screen
                name="Translate"
                component={TranslateHome}
            />
            <Stack.Screen
                name="Languages"
                component={LanguagesList}
            />
            <Stack.Screen
                name="Text"
                component={TranslateText}
            />
        </Stack.Navigator>
    );
};