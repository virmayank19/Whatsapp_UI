import React, { Component } from "react";
import { Container, Header,Button,Left,Right, Content,Badge, Icon, Body, Title,Tabs,Tab,TabHeading,Text } from "native-base";
import appStyles from "./styles/appStyles";
//import { Threetabs } from "./Maintabs";
import  CallsScreen  from "./screens/calls";
import  ChatsScreen  from "./screens/chats";
import  StatusScreen  from "./screens/status";
import  CameraScreen from "./screens/cameraScr";

export default class MainHeader extends Component {
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
            
            <Body>
                <Title style={appStyles.appTitle}>WhatsApp</Title>
            </Body> 
             <Right>
               <Button transparent>
                  <Icon type="MaterialIcons" name="search"/>
               </Button>
               <Button transparent>
                  <Icon type="MaterialIcons" name="more-vert"/>
               </Button>
             </Right>
        </Header>    
            
                <Tabs initialPage={2} 
                      tabBarBackgroundColor="#075E54"
                      tabBarUnderLineStyle={appStyles.tabBarUnderline}
                      tabContainerStyle={{elevation:0}}  
                      tabBarActiveTextColor="#ffffff"
                >
                    <Tab heading={ <TabHeading 
                            style={{backgroundColor:"#075E54"}}
                            
                            >
                        <Icon name="camera" />
                        
                    </TabHeading>}>
                        <CameraScreen/>
                    </Tab>

                    <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}>
                        <Text style={appStyles.tabsText} >CHATS</Text>
                            <Badge style={appStyles.badgeStyle}>
                                <Text style={appStyles.badgeText}>2</Text>
                            </Badge>
                        </TabHeading>
                        }>
                        <ChatsScreen/>
                    </Tab>
                    
                    <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}} >
                        <Text style={appStyles.tabsText}>STATUS</Text>
                        </TabHeading>
                        }>
                        <StatusScreen/>
                    </Tab>

                    <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}} >
                        <Text style={appStyles.tabsText}>CALLS</Text>
                        </TabHeading>
                        }>
                        <CallsScreen/>
                    </Tab>
                </Tabs>
              
      </Container>
    );
  }
}