import {React} from 'react';
import {View,Text,StyleSheet,FlatList,} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import firebase from "firebase";
import db from '../config';

export default class RemarkScreen extends React.Component {

    constructor(){
        super();
        this.state={
            remark : "",
            date : "",
        }
    }
    
    async fetchRemark(){
        let date , remarks;
        const data = await db.collection("Students").where("Student_id","==",currentUser.uid).get()
        .then(doc => {
            var info = doc.data()
            date = info.Date
            remarks = info.Text
        })
        this.setState({date : date, remark : remarks})
    }

    componentDidMount(){
        this.fetchRemark();
        
    }
    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}> Remarks </Text>
                </View>
                <FlatList
                    renderItem = {() => {
                        <View style={{marginTop : 30, flex : 1,}}>
                            <Text> {this.state.date} </Text>
                            <Text> {this.state.remark} </Text>
                        </View>
                    }}

                    keyExtractor = {(index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    nameText: {
      color: "white",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginTop: RFValue(10)
    },
  });