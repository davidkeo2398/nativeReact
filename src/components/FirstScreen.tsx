import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs, Label, path, Style } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import styles from '../assets/css/style.firstscreen.css'
import avt from '../assets/images/avt.png'

// type FirstScreenProps = {
//     route: RouteProp<MainStackParamList, "first">,
//     navigation: FrameNavigationProp<MainStackParamList, "first">,
// }

export class First extends React.Component {
    render() {

        return (
            <stackLayout orientation='vertical'>
                <gridLayout
                    rows='50'
                    columns='*,*'
                >
                    <label
                    >All Documents</label>
                    <image src='~/assets/images/avt.png' />
                </gridLayout>
            </stackLayout>
        );
    }
    componentDidMount() {
        console.log(styles)
    }
}
