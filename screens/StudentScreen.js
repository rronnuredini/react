import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import StudentDetails from "../components/StudentDetails";

const StudentScreen = () => {
return (
    <View>

        <Text style={styles.text}>Students screeen</Text>
        <StudentDetails name ="Erlis" image={require("../assets/icon.png")}
        description="E ka marr vendin e pare dhe te tret"></StudentDetails>


        <StudentDetails name ="Erlis" image={require("../assets/icon.png")}
        description="E ka marr vendin e pare dhe te tret"></StudentDetails>


        <StudentDetails name ="Erlis" image={require("../assets/icon.png")}
        description="E ka marr vendin e pare dhe te tret"></StudentDetails>
    </View>
)
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical:20
    }
})

export default StudentScreen