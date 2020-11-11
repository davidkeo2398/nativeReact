import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs, Label, Style } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";


// type FirstScreenProps = {
//     route: RouteProp<MainStackParamList, "first">,
//     navigation: FrameNavigationProp<MainStackParamList, "first">,
// }

export class First extends React.Component {
    render() {

        return (
            // <gridLayout
            //     rows={"*, auto, auto, auto, *"}
            //     columns={"*, 200, *"}
            //     style={{
            //         width: "100%",
            //         height: "100%",
            //         backgroundColor: "beige",
            //     }}
            // >
            //     <label
            //         row={1}
            //         col={1}
            //         style={{
            //             textAlignment: "center",
            //             fontSize: 24,
            //         }}
            //     >
            //         <formattedString>
            //             <span className="fas" text="&#xf135;" />
            //             <span> Hello World!</span>
            //         </formattedString>
            //     </label>
            //     <button
            //         row={2}
            //         col={1}
            //         style={{
            //             textAlignment: "center",
            //             fontSize: 24,
            //         }}
            //         onTap={() => Dialogs.alert("Tap received!")}
            //     >
            //         Tap me for an alert
            // </button>
            //     <button
            //         row={3}
            //         col={1}
            //         onTap={onButtonTap}
            //         style={{
            //             fontSize: 24,
            //         }}
            //     >
            //         Go to next screen
            // </button>
            // </gridLayout>
            <stackLayout orientation='vertical'>
                <gridLayout
                    rows='50'
                    columns='*,*'
                >
                    <label 
                    >All Documents</label>
                    <image src="~/src/assests/images/"/>
                </gridLayout>
            </stackLayout>
        );
    }
}
