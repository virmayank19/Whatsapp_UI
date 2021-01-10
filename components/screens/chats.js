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
               </Left>
               <Body>
                   <Text>Mayank Virmani</Text>
                   <Text note>How are you?</Text>
               </Body>
               <Right>
                   <Text note style={{color:"#25D366"}}>5:00pm</Text>
                   <Badge style={appStyles.badgeChats}>
                     <Text style={appStyles.badgeTextChat}>2</Text>
                    </Badge>
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1005/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Gaurav</Text>
                   <Text note>lets meet on sunday</Text>
               </Body>
               <Right>
                   <Text note style={{color:"#25D366"}}>4:15pm</Text>
                   <Badge style={appStyles.badgeChats}>
                     <Text style={appStyles.badgeTextChat}>1</Text>
                    </Badge>
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1027/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Shivani</Text>
                   <Text note>okay</Text>
               </Body>
               <Right>
                   <Text note >3:27pm</Text>
                   
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1012/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Saksham</Text>
                   <Text note>great job done by you</Text>
               </Body>
               <Right>
                   <Text note >9:15am</Text>
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1011/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Parul</Text>
                   <Text note>Hope you are doing well</Text>
               </Body>
               <Right>
                   <Text note >8:46am</Text>
              </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Boss</Text>
                   <Text note>Be ready with the presentation </Text>
               </Body>
               <Right>
                   <Text note >8:30pm</Text>
                   
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/1010/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Prateek</Text>
                   <Text note>doing well</Text>
               </Body>
               <Right>
                   <Text note >8:05am</Text>
                   
               </Right>
           </ListItem>

           <ListItem avatar noBorder>
               <Left>
                <Thumbnail source={{uri: "https://picsum.photos/id/17/200/300"}}>

                </Thumbnail>
               </Left>
               <Body>
                   <Text>Aman</Text>
                   <Text note>fine what about you?</Text>
               </Body>
               <Right>
                   <Text note >7:15am</Text>
                   
               </Right>
           </ListItem>
           
        </Content>
        <Fab position="bottomRight"
              style={{backgroundColor:"#25D366"}}
          >
             <Icon name="chat" type="MaterialIcons"/>
           </Fab>
      </Container>
    );
  }
}