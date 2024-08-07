import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { styles } from '../styles/Styles';

interface AppbarComponentProps {
    back: boolean;
    backAction?: () => void;
    mode: 'center-aligned' | 'large' | 'medium' | 'small';
    title: string;
}

export const AppbarComponent: React.FC<AppbarComponentProps> = ({
    back,
    backAction,
    mode,
    title
}) => {
    return (
        <Appbar.Header
            mode={mode}
            style={styles.appbarHeader}
        >
            {
                back &&
                <Appbar.BackAction
                    onPress={backAction}
                />
            }
            <Appbar.Content
                title={title}
            />
        </Appbar.Header>
    );
}