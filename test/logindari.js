import React, {Component } from 'react';
import{
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TouchableNativeFeedback,
    
} from 'react-native';
import{
    Item,
    Input,
    Form,
    Label,
    Thumbnail,
    Text,
    Button,
    SplashScreen
} from 'native-base';
import BgImage from '../loginscreen/Blurrybackground.jpeg'
import Logo from '../loginscreen/pikachu.png'
import { KeyboardAwareScrollView, KeyboardAwareSectionList } from 'react-native-keyboard-aware-scroll-view';
class LoginForm extends Component{
    
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        SplashScreen
    }
    render(){
        return(
             
            <View style={styles.containerStyle}>
                
                <Image style={styles.BgImageStyle} source={BgImage}/>
                <ScrollView>
                <View style={styles.logostyle}>
                    <Thumbnail square large source={Logo}/>
                    <Text style={styles.TextLogoStyle}>welcome</Text>
                </View>
                
                <Form style={styles.formloginStyle}>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>username : </Text>
                        </Label>
                            <Input style={styles.inputStyle}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>your password : </Text>
                        </Label>
                            <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>
                </Form>
                </ScrollView>


                <View style={{alignItems:'center',marginBottom:90}}>
                    <Button style={{width:105,height:50}} rounded primary  onPress={() => this.setState({ instruksi: true })}>
                            <Text style={{textAlignVertical:'center'}}>Primary</Text>
                    </Button>
                </View>
                <View style={{paddingVertical:20}}>
                    <TouchableOpacity  onPress={()=>{alert('ini tombol')}}>
                        <Text style={styles.pasword}>
                            kamu lupa password ya ....?
                        </Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            
        )
    }
}
const styles =StyleSheet.create({
    containerStyle:{
        flex:1,
    },
    BgImageStyle:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        width:'100%',
        height:'100%'

    },
    logostyle:{
        marginTop:70,
        marginBottom:80,
        alignItems:'center',
        justifyContent:'center'
    },
    TextLogoStyle:{
        fontSize:30,
        color:'#dc143c'
    },
    formloginStyle:{
        marginTop:-50,
        paddingLeft:10,
        paddingRight:30
    },
    inputStyle:{
        color:'#dc143c',
        marginBottom:6,
        fontSize:20,
        fontFamily:'italic'
    },
    pasword:{
        fontSize:8,
        color:'#fff',
        textAlign:'center'
        
    }
    

    
})
export default LoginForm;