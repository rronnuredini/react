import React from "react";
import { View, Image, StyleSheet , } from 'react-native';
import { Text, TouchableOpacity } from "react-native";

const ProfileInfo = (props) => {
    return(
        <View style={styles.container}>
            <Image source={props.image} style={styles.img}></Image>
            <View style={styles.infoWrapper}>
                <Text style={styles.fullname}>{props.fullname}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <TouchableOpacity 
                style={styles.btn}>
                    <Text style={styles.btnText}>Hire him</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 280,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    infoWrapper: {
        backgroundColor: 'white',
        width: '75%',
        alignItems: 'center',
        marginLeft: 40,
        marginTop: -50,
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    btn: {
        backgroundColor: 'yellow',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white',
    },
    fullname: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform:'uppercase',
        color: 'darkblue',

    },
    desc: {
        textAlign: 'center',
    }
});

export default ProfileInfo;