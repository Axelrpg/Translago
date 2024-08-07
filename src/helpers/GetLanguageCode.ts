export const getLanguageCode = (language: string) => {
    switch (language) {
        case 'English':
            return 'en';
        case 'Spanish':
            return 'es';
        case 'Chinese':
            return 'zh';
        case 'German':
            return 'de';
        case 'French':
            return 'fr';
        case 'Italian':
            return 'it';
        case 'Portuguese':
            return 'pt';
        case 'Russian':
            return 'ru';
        case 'Japanese':
            return 'ja';
        case 'Korean':
            return 'ko';
        case 'Arabic':
            return 'ar';
        case 'Hindi':
            return 'hi';
        default:
            return 'en';
    }
};