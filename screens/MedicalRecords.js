import React,{useState, useEffect} from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableHighlight, View} from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card, Button } from '../components';
import articles from '../constants/articles';
import { Images, argonTheme } from "../constants";
import DropDownItem from "react-native-drop-down-item";
const { width } = Dimensions.get('screen');
const IC_ARR_DOWN = require('./components/ic_arr_down.png');
const IC_ARR_UP = require('./components/ic_arr_up.png');
import { List } from 'react-native-paper';

export default function Home(props){
  const {navigation} = props
  const [ email, setEmail ]= useState('')
  const [ contents, setContents ] = useState( [
    {
      title: "Sugar (Fasting)",
    },
    {
      title: "Sugar (Random)",
    },
    {
      title: "Complete Blood Picture (CBC)",
    }
  ]);
  
  const renderArticles = () => {
    return (
      <ScrollView
        contentContainerStyle={styles.articles} showsVerticalScrollIndicator={false}>          
        <Block flex>
          <Block center>
            <Image style={{width:200, height:200}} source={Images.logoImage}/>
            <Text color={argonTheme.COLORS.PRIMARY}  style={{fontSize:18, marginTop:18, fontWeight:"bold"}}>john.doe@gmail.com</Text>
          </Block>
          <Block center style={{marginTop:20}}>
            <ScrollView >

              <List.Section style={styles.home}>
                {
                  contents
                  ? contents.map((param, i) => {
                      return(
                        <List.Accordion
                          key={i}
                          style={{backgroundColor:"white",marginRight:20}}
                          title={<Text color={argonTheme.COLORS.PRIMARY} >{param.title}</Text>}
                        >
                          <List.Item title={
                            <Button color="primary"  size="large" onPress={()=>navigation.navigate('ImageBrowser',{type: i})}>
                              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                Scan Report
                              </Text>
                            </Button>
                            } 
                          />
                          <List.Item title={
                            <Button color="primary"  size="large" onPress={()=>navigation.navigate('Trends',{type: i})}>
                              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                View Trends
                              </Text>
                            </Button>
                            } 
                          />
                          <List.Item title={
                            <Button color="primary"  size="large" onPress={()=>navigation.navigate('QRcode',{type: i})}>
                              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                Share with Doctor
                              </Text>
                            </Button>
                            } 
                          />
                        </List.Accordion>
                      )
                    })
                  :null
                }
              </List.Section>
              {/* {
                contents
                ? contents.map((param, i) => {
                  return (
                    <DropDownItem
                      key={i}
                      // style={styles.dropDownItem}
                          style={styles.headText}
                      contentVisible={false}
                      invisibleImage={IC_ARR_DOWN}
                      visibleImage={IC_ARR_UP}
                      header={
                        <View style={styles.header}>
                          <Text size={20} color={argonTheme.COLORS.PRIMARY} >{param.title}</Text>
                        </View>
                      }
                    >                
                      <View style={styles.drop} >
                        <TouchableHighlight onPress={() =>{}}>             
                          <Text >Scan Report</Text>           
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() =>{}} >
                          <Text >View Trends</Text>               
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() =>{}}>             
                          <Text >Share with Doctor</Text>               
                        </TouchableHighlight>  
                      </View>
                    </DropDownItem>
                  );
                })
                : null
              } */}
              <View style={{ height: 96 }}/>
            </ScrollView>
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

