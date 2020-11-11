import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Label } from "@nativescript/core";
import { unmountComponentAtNode } from "react-nativescript";

// type ThirdScreenProps = {
//     route: RouteProp<MainStackParamList, "third">,
//     navigation: FrameNavigationProp<MainStackParamList, "third">,
// }

export class Third extends React.Component {
    
    
    render() {
        
        return (
            <stackLayout orientation='vertical'
                backgroundColor='pink'
                width='100%'
                height='100%'
            >
                <label horizontalAlignment='center'
                    fontWeight='bold'
                    fontSize='20pt'>INFO</label>
                <image
                    horizontalAlignment='center'
                    width='300px'
                    height='300px'
                    src="https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/51295940_977748785743126_3959238412665356288_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=ual2aXl19U8AX8B0IaN&_nc_ht=scontent.fhph1-1.fna&oh=710eb4867ee4321a461613fda1076614&oe=5FD2EEC9"></image>
                <gridLayout
                    marginTop='20px'
                    horizontalAlignment='center'
                    columns='auto,auto'
                    rows='50, 50, 50, 50, 50'
                >
                    <label row={0} col={0} fontWeight='bold'>Họ và tên: </label>
                    <label row={0} col={1} textAlignment='right'>Nguyễn Bội Kỳ</label>
                    <label row={1} col={0} fontWeight='bold'>Ngày sinh: </label>
                    <label row={1} col={1} textAlignment='right'>02-03-1998</label>
                    <label row={2} col={0} fontWeight='bold'>Địa chỉ: </label>
                    <label row={2} col={1} textAlignment='right'>213/6 Nguyễn Trãi P2 Q5</label>
                    <label row={3} col={0} fontWeight='bold'>Giới tính: </label>
                    <label row={3} col={1} textAlignment='right'>Nam</label>
                    <label row={4} col={0} fontWeight='bold'>Email: </label>
                    <label row={4} col={1} textAlignment='right'>nguyenboiky@gmail.com</label>
                </gridLayout>
            </stackLayout>
        );
    }

}