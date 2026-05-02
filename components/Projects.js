import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Projects = ({ props }) => {
    return (
        <View style={styles.container}>
            <Image source={Props.firstImg} style={styles.image} />
            <Image source={Props.secondImg} style={styles.image} />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        },
});

export default Projects;