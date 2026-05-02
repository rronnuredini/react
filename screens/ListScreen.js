import React from "react";
import {Text,View,StyleSheet,FlatList,Button} from "react-native";
import { Button } from "react-native/types_generated/index";
const students = [
    {name: 'Rron',lastname: 'Nuredini', age:'15'},
    {name: 'Ardian',lastname: 'Nuredini', age:'20'},

];
const ListScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>List of students</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(student) => student.name}
                data={students}
                renderItem={({item}) => {
                    return <Text>{item.name} {item.lastname} {item.age}</Text>
                }}
            />
            <Button
                title="Go to Menu"
                onPress={() => props.navigation.goBack()}
            >

            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',}
});

export default ListScreen;