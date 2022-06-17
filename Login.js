import { Alert } from "react-native";

render() 
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Enter Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Enter Password"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  
    export default class LoginScreen extends Component{
    constructor(props){
      super(props);
      this.state= {
          email:"",
          password:""
      }

         };
}
handleLogin = (email , password) => {
firebase
.auth()
.sighinwithEmailandPassword(email,password)
.then(() => {
    this.props.navigation.navigate("BottomTab");
})
.catch(error => {
    Alert.alert(error.message); 
});
};
import { createSwitchNavigator , createAppContainer} from "react.navigation";
export default class App extends Component {
    render(){
        return <AppContainer/>;
    }
}