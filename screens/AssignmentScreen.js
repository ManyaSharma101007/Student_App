import {React} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native';

export default class AssignmentScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}> Assignment </Text>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <View style={{flex : 1,justifyContent : "center", alignItems : "center"}}>
                            <Text style={{ fontSize : 20, fontWeight : "bold"}}> Mathematics </Text>
                            <TextInput style={styles.searchBar}/>
                            <TouchableOpacity 
                                var text = "One Pending Assignment"
                                style={styles.submitButton}
                                onPress = {text => {
                                    db.collection("Teachers").add({
                                        "Notification" : {
                                           "Date" : firebase.firestore.Timestamp.now().toDate(),
                                           "Text" : text, 
                                           "Read" : false
                                        }
                                    })
                                } }
                            > 
                                <Text style={{fontSize : 15, fontWeight : "bold"}}> Submit </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex : 1,justifyContent : "center", alignItems : "center"}}>
                            <Text style={{ fontSize : 20, fontWeight : "bold"}}> English </Text>
                            <TextInput style={styles.searchBar}/>
                            <TouchableOpacity 
                                var text = "One Pending Assignment"
                                style={styles.submitButton}
                                onPress = {text => {
                                    db.collection("Teachers").add({
                                        "Notification" : {
                                           "Date" : firebase.firestore.Timestamp.now().toDate(),
                                           "Text" : text, 
                                           "Read" : false
                                        }
                                    })
                                } }
                            > 
                                <Text style={{fontSize : 15, fontWeight : "bold"}}> Submit </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex : 1,justifyContent : "center", alignItems : "center"}}>
                            <Text style={{ fontSize : 20, fontWeight : "bold"}}> Science </Text>
                            <TextInput style={styles.searchBar}/>
                            <TouchableOpacity 
                                var text = "One Pending Assignment"
                                style={styles.submitButton}
                                onPress = {text => {
                                    db.collection("Teachers").add({
                                        "Notification" : {
                                           "Date" : firebase.firestore.Timestamp.now().toDate(),
                                           "Text" : text, 
                                           "Read" : false
                                        }
                                    })
                                } }
                            > 
                                <Text style={{fontSize : 15, fontWeight : "bold"}}> Submit </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
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
    fieldsContainer: {
        flex: 0.85
    },
    searchBar:{
        flexDirection:'row',
        height:40,
        width:'auto',
        borderWidth:0.5,
        alignItems:'center',
        backgroundColor:'grey',
    
    },
    submitButton: {
        marginTop: RFValue(20),
        alignItems: "center",
        justifyContent: "center"
    },
})    