import React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
    return (
        <View>
            
            <Text style={styles.text}>Welcome to menu</Text>
           
            
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}
            >
                <Text style={styles.touch}>Go to Students</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Box')}
            >
                <Text style={styles.touch}>Go to BoxScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Posts')}
            >
                <Text style={styles.touch}>Go to PostsScreen</Text>
            </TouchableOpacity>
        </View>
    
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    touch:{
        textAlign: 'center',
        margin: 20,
        backgroundColor: 'darkblue',
        textsize: 20,
        fontSize: 20,
        color: 'white',

    }
});

export default MenuScreen;