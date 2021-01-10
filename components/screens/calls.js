import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon ,Content,Text, ListItem, Thumbnail, Badge, Fab, View} from 'native-base';
import appStyles from "./../styles/appStyles";
import { Vibration } from 'react-native';

export default class ChatsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
           
           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/177/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Gaurav
                </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,1:12pm</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="call" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/16/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Saurabh
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-received" style={{color:"#FF0000",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,12:17pm</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="videocam" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/177/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Ranveer
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/> 
                   <Icon type="MaterialIcons" name="call-received" style={{color:"#FF0000",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,11:50am</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="call" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1027/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Shivani
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,10:12am</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="videocam" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1010/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Aman
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/>  
                   <Text note style={{fontSize:14,}}> Today,11:50am</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="call" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/77/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Random
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/> 
                   <Icon type="MaterialIcons" name="call-received" style={{color:"#FF0000",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,11:50am</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="call" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/17/200/300"}}>

                </Thumbnail>
                
               </Left>
               <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,marginTop:-20}}>
                 Siddharth
                 </Text>
               <Body>
                   <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:33,marginLeft:-200}}> 
                   <Icon type="MaterialIcons" name="call-made" style={{color:"#25D366",fontSize:20}}/> 
                   <Icon type="MaterialIcons" name="call-received" style={{color:"#FF0000",fontSize:20}}/> 
                   <Text note style={{fontSize:14,}}> Today,8:50am</Text>
                   </View>
               </Body>    
               <Right>
               <Icon type="MaterialIcons" name="call" style={{color:"#25D366",fontSize:30,marginTop:12}}/> 
               </Right>
           </ListItem>

        </Content>  


        <Fab position="bottomRight"
              style={{backgroundColor:"#25D366"}}
          >
             <Icon name="phone-in-talk" type="MaterialIcons"/>
        </Fab>
      </Container>
    );
  }
}