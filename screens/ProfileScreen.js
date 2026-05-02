import React from "react";
import { View, StyleSheet } from "react-native";
import StudentInfo from "./StudentInfo";
import Projects from "./Projects";
import { Touchable } from "react-native/types_generated/index";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StudentInfo
        fullname="John doe"
        position="UI/ux Designer"
        description="Were passionate about creating beautiful designs."
        profileImage="stylish-man-flat-vector-profile-picture-ai-generated_606187-314.png"
      />
    <View style={styles.heading}>
        <Text style={styles.Text}>Projects</Text>
        <TouchableOpacity style={styles.btnText}>
            <Text style={styles.btnText}>See all</Text>
        </TouchableOpacity>
    </View>
        <Projects
            firstImg={require("../assets/project1.webp")}
            secondImg={require("../assets/project2.webp")}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
});

export default ProfileScreen;