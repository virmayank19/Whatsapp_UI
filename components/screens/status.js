import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon ,Content,Text, ListItem, Thumbnail, Badge, Fab} from 'native-base';
import appStyles from "./../styles/appStyles";

export default class ChatsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
           
           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/177/200/300"}}>

                </Thumbnail>
                <Icon type="MaterialIcons" name="add-circle" style={appStyles.addStatusIcon }/> 
               </Left>
               <Body>
                   <Text>My Staus</Text>
                   <Text note>Urgents Calls Only</Text>
               </Body>    
           </ListItem>
{/* Item divider of recent tabs starts from here */}
           <ListItem itemDivider style={appStyles.listItemDivider}>
              <Text style={{fontSize:14, fontWeight:"bold"}}>Recent Updates</Text>   
           </ListItem> 

{/* See recent Updates */}
           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1027/200/300"}}></Thumbnail>
                 
               </Left>
               <Body>
                   <Text>Shivani</Text>
                   <Text note>Today, 3:15pm</Text>
               </Body>    
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1005/200/300"}}></Thumbnail>
                
               </Left>
               <Body>
                   <Text>Gaurav</Text>
                   <Text note>Today,1:23pm</Text>
               </Body>    
           </ListItem>
{/* Item divider of viewed updates status tabs starts from here */}
          <ListItem itemDivider style={appStyles.listItemDivider}>
              <Text style={{fontSize:14, fontWeight:"bold"}}>Viewed Updates</Text>   
           </ListItem> 

{/* See recent Updates */}
           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1010/200/300"}}></Thumbnail>
                 
               </Left>
               <Body>
                   <Text>Aman</Text>
                   <Text note>Today, 12:16pm</Text>
               </Body>    
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1012/200/300"}}></Thumbnail>
                
               </Left>
               <Body>
                   <Text>Prabhjot</Text>
                   <Text note>Today,11:13am</Text>
               </Body>    
           </ListItem> 
           
        </Content>



        <Fab position="bottomRight"
              style={{backgroundColor:"#25D366"}}
          >
             <Icon name="photo-camera" type="MaterialIcons"/>
        </Fab>
      </Container>
    );
  }
}