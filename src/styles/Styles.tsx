import { Appearance, StyleSheet } from "react-native";
import { darkColors } from "../colors/DarkColors";
import { lightColors } from "../colors/LightColors";

const currentStyle = Appearance.getColorScheme();

export const styles = StyleSheet.create({
    appbarHeader: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
    },
    divider: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.secondaryBackground.color
            : lightColors.secondaryBackground.color,
        marginTop: 20,
    },
    homeButtonsContainer: {
        alignItems: 'center',
        backgroundColor: currentStyle === 'dark'
            ? darkColors.secondaryBackground.color
            : lightColors.secondaryBackground.color,
        justifyContent: 'center',
        padding: 10,
    },
    homeContainer: {
        flex: 1,
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
    },
    homeFirstContainer: {
        flex: 1,
        padding: 20
    },
    homeSelectedLanguageButton: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
        justifyContent: 'center',
        width: '35%',
    },
    homeSelectedLanguageContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    homeTranslateButton: {
        borderRadius: 50,
        height: 100,
        width: 100,
        padding: 10,
    },
    lenguagesListSearch: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
        width: '87%',
    },
    translatedText: {
        fontSize: 20,
        marginTop: 15,
    },
});