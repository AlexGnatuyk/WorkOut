import React, { Component } from "react";
import { View, Button } from "react-native";

import CreateTrain from "./create-train";
import ExistingTrain from "./existing-train";

export default class MainWindow extends Component {
    render() {      
        
        return(
            <View>
                <Button
                  onPress =  { () => this.props.navigation.navigate('CreateTrain')}
                  title="Create train"
                />
                <Button
                  onPress = { () => this.props.navigation.navigate('ExistingTrain')}
                  title="Open existing trains"
                />
            </View>
        );
    }
}