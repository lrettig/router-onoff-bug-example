/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Actions,
  Router,
  Route,
} from 'react-native-router-flux'

class SomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}} onPress={this.props.callback}>
          {this.props.name+ ": Tap here."}
        </Text>
      </View>);
  }
};

class RouterOnOffBugExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({mode: true}), 1);
  }

  render() {
    return this.state.mode ? <SomeScreen callback={() => this.setState({mode: false})} name="screen0"/> : (
      <View style={{flex: 1}}>
        <Router>
          <Route name="screen1" component={SomeScreen} callback={() => {
            Actions.screen2()
          }}/>
          <Route name="screen2" component={SomeScreen} callback={() => {
            Actions.screen1()
          }}/>
        </Router>
      </View>
    );
  }
}

AppRegistry.registerComponent('RouterOnOffBugExample', () => RouterOnOffBugExample);
