import React, { Component } from "react";
import { Container, Header,Button,Left,Right, Content,Badge, Icon, Body, Title,Tabs,Tab,TabHeading,Text } from "native-base";
import appStyles from "./styles/appStyles";
import  CallsScreen  from "./screens/calls";
import  ChatsScreen  from "./screens/chats";
import  StatusScreen  from "./screens/status";
 class ThreeTabs extends Component {
  render() {
    return (
      <Container>  
        
        <Tabs initialPage={1} 
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
                        <Text>camera screen</Text>
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
                        <Text>status screen</Text>
                    </Tab>

                    <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}} >
                        <Text style={appStyles.tabsText}>CALLS</Text>
                        </TabHeading>
                        }>
                        <Text>calls screen</Text>
                    </Tab>
                </Tabs>
        
      </Container>
    );
  }
}
export default ThreeTabs;