import { StyleSheet } from 'react-native';
export default StyleSheet.create ({
    //app title Whtasapp
    appTitle:{
        fontSize:20,
        fontWeight:"bold"
    },
    headerBackgroundColor:{
        backgroundColor:"#075354",
    },

    tabBarUnderline:{
        height:2,
    },
    //text of Tabs like chat, status,calls
    tabsText:{
        fontWeight:'bold',
        fontSize:14,
        
    },
    //Badge Style
    badgeStyle:{
        height:24,
        backgroundColor:"#ECE5DD",
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center",
    },
    badgeText:{
        fontSize:14,
        color:"#075354",
    },
    //badge chats section
    badgeChats:{
        backgroundColor:"#25D366",
        height:22,
        marginTop:4,
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center",
    },
    badgeTextChat:{
        fontSize:12,
        color:'snow',
    },

    //Status Screen
    addStatusIcon:{
        color:"#25D366",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:43,
        height:20,
        fontSize:20,
    },

    listItemDivider:{
        marginTop:10,
        height:14,
    }

});