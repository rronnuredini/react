import React from "react";
import { Text, View, StyleSheet,  } from 'react-native';
import { TouchableOpacity } from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Project from "../components/Project";

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <ProfileInfo
                fullname="jon doe"
                jobPosition="Software Engineer"
                desc="I am a software engineer with 5 years of experience in mobile development. I have worked on several projects and I am passionate about creating beautiful and functional applications."
                image={require('../assets/profile.png')}
                >
            </ProfileInfo>

            <View style={styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Project 
                firstImg={require('../assets/project1.png')}
                secondImg={require('../assets/project2.png')}
            ></Project>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    screen: {
        backgroundColor: '#fff',},
    text: {
        fontSize: 18,
        fontWeight: 'bold',},
    btn: {
        backgroundColor: 'yellow',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white',
    }
})


export default ProfileScreen;