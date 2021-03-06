import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  Item,
  Input,
  CardItem,
  ListItem,
  List
} from "native-base";
import NavigationService from "./../../../Navigation/Services/NavigationService";
export default class JobsHome extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.openFilterBox = this.openFilterBox.bind(this);
    this.closeFilterBox = this.closeFilterBox.bind(this);
    this._onPressJobName = this._onPressJobName.bind(this);
    this.state = {
      showFilterBox: false
    };
  }
  openFilterBox = () => {
    this.setState({
      showFilterBox: true
    });
  };
  closeFilterBox = () => {
    this.setState({
      showFilterBox: false
    });
  };

  private allNews = [
    {
      id: 1,
      status: "Process going on",
      nameOfCompany: "TCS",
      createdBy: "Shawn Majoski",
      createdAt: "2 hours ago",
      jobsOffered: [
        {
          title: "jobTitle 1",
          id: "0",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 1",
          id: "1",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 2",
          id: "2",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 3",
          id: "3",
          allowed: "Applicable"
        }
      ]
    },
    {
      id: 2,
      status: "Completed",
      nameOfCompany:
        "longest company name award goes to this company longest company name award goes to this company",
      createdBy: "paul Majoski",
      createdAt: "4 hours ago",
      jobsOffered: [
        {
          title:
            "jobTitle 1 I could be as long as I want because no one can stop the power of a mass rec, I am the king and you are the slave. hahahahhahahahahaha",
          id: "0",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 1",
          id: "1",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 2",
          id: "2",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 3",
          id: "3",
          allowed: "Applicable"
        }
      ]
    },
    {
      id: 3,
      status: "Will start",
      nameOfCompany: "Infosys",
      createdBy: "Amin walker",
      createdAt: "5 hours ago",
      jobsOffered: [
        {
          title: "jobTitle 1",
          id: "0",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 1",
          id: "1",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 2",
          id: "2",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 3",
          id: "3",
          allowed: "Applicable"
        }
      ]
    },
    {
      id: 4,
      status: "Goinng on",
      nameOfCompany: "Wipro",
      createdBy: "Rise Matheli",
      createdAt: "10 hours ago",
      jobsOffered: [
        {
          title: "jobTitle 1",
          id: "0",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 1",
          id: "1",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 2",
          id: "2",
          allowed: "Applicable"
        },
        {
          title: "jobTitle 3",
          id: "3",
          allowed: "Applicable"
        }
      ]
    }
  ];
  openDrawer() {
    NavigationService.openDrawer();
  }
  _onPressJobName(id: String) {
    console.log(id);
    const NavigationActions = this.props.navigation;
    this.props.navigation.navigate("JobsScreen", { jobId: id });
    // NavigationActions.navigate({
    // routeName: 'JobsHome',
    // action: NavigationActions.navigate({ routeName: 'JobsScreen' }),
    // }),
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "rgb(32,53, 70)" }}>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Jobs</Title>
          </Body>
        </Header>
        <Header style={{ backgroundColor: "rgb(32,53, 70)" }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onFocus={this.openFilterBox}
              onBlur={this.closeFilterBox}
            />
            <Icon name="ios-search" />
          </Item>
        </Header>
        {this.state.showFilterBox && (
          <View
            style={{
              flex: 1,
              height: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              backgroundColor: "rgb(32,53, 70)"
            }}
          >
            <Button transparent onPress={this.closeFilterBox}>
              <Text style={{ color: "white" }}>Reset</Text>
            </Button>
            <Button transparent>
              <Text style={{ color: "white" }}>Filters</Text>
            </Button>
            <Button transparent>
              <Text style={{ color: "white" }}>Search</Text>
            </Button>
          </View>
        )}
        <Content padder>
          {this.allNews.map(jobs => {
            return (
              <Card key={jobs.id}>
                <CardItem header button>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{ color: "grey", fontSize: 13 }}>
                      {jobs.status}
                    </Text>

                    <Text
                      style={{ color: "black", marginTop: 5, fontSize: 25 }}
                    >
                      {jobs.nameOfCompany}
                    </Text>
                  </View>
                </CardItem>
                <List>
                  {jobs.jobsOffered.map(jobName => {
                    return (
                      <ListItem
                        noIndent
                        key={jobName.id}
                        style={{
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 5,
                          paddingBottom: 5
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: 10,
                            margin: 0,
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between"
                          }}
                          onPress={() => this._onPressJobName(jobName.id)}
                        >
                          <Body
                            style={{
                              // height: 30,
                              paddingTop: 5,
                              paddingHorizontal: 10,
                              flex: 1,
                              flexDirection: "column",
                              justifyContent: "space-between"
                            }}
                          >
                            <Text style={{ flex: 1, fontSize: 18 }}>
                              {jobName.title}
                            </Text>
                            <Text
                              style={{ flex: 1, fontSize: 13, color: "green" }}
                            >
                              {jobName.allowed}
                            </Text>
                            {/* <Right><Text> <Icon name="search" onPress={() => this._onPressJobName(jobName.id)}/></Text> </Right> */}
                          </Body>
                        </TouchableOpacity>
                      </ListItem>
                    );
                  })}
                </List>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
