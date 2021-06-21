import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card, Button } from '../components';
import articles from '../constants/articles';
import { Images, argonTheme } from "../constants";
const { width } = Dimensions.get('screen');

export default function Home({navigation, route}){
  
  const renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Block center>
            <Image style={{width:200, height:200}} source={Images.logoImage}/>
            <Text color={argonTheme.COLORS.PRIMARY}  style={{fontSize:18, marginTop:18, fontWeight:"bold"}}>john.doe@gmail.com</Text>
          </Block>
          <Block center style={{marginTop:80}}>
            <Button color="primary"  size="large" onPress={()=>navigation.navigate("MedicalRecords")}>
              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                Medical Records
              </Text>
            </Button>
            <Button color="primary"  size="large" onPress={()=>navigation.navigate("GeneralPrescription")}>
              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                General Prescription
              </Text>
            </Button>
            {/* <Button style={{backgroundColor:"#00BFFF", height:60}} size="large" round>Medical Records</Button>
            <Button style={{backgroundColor:"#00BFFF", height:60}} size="large" round>General Prescription</Button> */}
          </Block>
          <Block center>
            <Text color={argonTheme.COLORS.PRIMARY} style={{fontSize:12, marginTop:50, fontWeight:"normal"}} >Powered By Neurocomputation lab, NCAI</Text>
          </Block>
        </Block>
      </ScrollView>
    )
  }

  return (
    <Block flex center style={styles.home}>
      {renderArticles()}
    </Block>
  );
  
}

const styles = StyleSheet.create({
  home: {
    width: width,    
    backgroundColor: "white"
  },
  articles: {
    marginTop: 50,
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  button: {
    height: 60,
  }
});

