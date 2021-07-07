import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme,Card} from "galio-framework";

import { Button, Icon } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  constructor(props) {     
    super(props)
    this.state={
      patient_id:'123',
      p_name: 'john doe',
      address: 'karachi',
      contact_no: '0300-1923456',
      dob:'24/09/1999',
      gender:'Male',
      email: 'john.doe@gmail.com',
      id:'123'
    }  
  }
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex >
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, }}
            >
              <Card flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    tintColor={argonTheme.COLORS.PRIMARY}
                    // source={{ uri: Images.ProfilePicture }}
                    source={Images.logoImage}
                    style={styles.avatar}
                  />
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color={argonTheme.COLORS.PRIMARY}>
                      {this.state.p_name }
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                      { this.state.address}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                      { this.state.contact_no}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                      { this.state.dob}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                      { this.state.gender}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                      { this.state.email}
                    </Text>

                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle >
                    <Button
                      color="primary"
                      style={{flexDirection:"row", height:40 }}                    
                    >
                      <Icon style={{fontSize:18, marginRight:10}} name="logout" family="AntDesign" color={argonTheme.COLORS.WHITE} />
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        Logout
                      </Text>
                    </Button>
                  </Block>
                  {/* <Block
                    row
                    space="between"
                  >
                    <Text bold size={16} color="#525F7F" style={{marginTop: 12}}>
                      Album
                    </Text>
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: "#5E72E4", fontSize: 12, marginLeft: 24 }}
                    >
                      View all
                    </Button>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: "wrap" }}>
                      {Images.Viewed.map((img, imgIndex) => (
                        <Image
                          source={{ uri: img }}
                          key={`viewed-${img}`}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      ))}
                    </Block>
                  </Block>
              */}
                </Block>
              </Card>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    // marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    backgroundColor: "white"
  },
  profileBackground: {
    backgroundColor: "#00BFFF",
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    elevation:3,
    borderColor: "transparent"
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {

    // position: "relative",
    marginTop: -50
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
