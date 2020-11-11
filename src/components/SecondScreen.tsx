import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";

type SecondScreenProps = {
    route: RouteProp<MainStackParamList, "second">,
    navigation: FrameNavigationProp<MainStackParamList, "second">,
}

export class Second extends React.Component {
    // function onButtonTap() {
    //     // navigation.goBack();
    //     navigation.navigate('third')
    // }
    // function onButtonTap2() {
    //     navigation.navigate('first')
    // }
    render() {
        return (
            <flexboxLayout
                style={{
                    flexGrow: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "gold",
                }}
            >
                <label fontSize={24} text={"You're viewing the second route!"} />
                {/* <button onTap={onButtonTap} fontSize={24} text={"Go third"} />
                <button onTap={onButtonTap2} fontSize={24} text={"Go back first"} /> */}
            </flexboxLayout>
        );
    }
}