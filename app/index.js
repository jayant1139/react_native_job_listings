import { Text,View,ScrollView,SafeAreaView } from "react-native";
import { Stack,useRouter } from "expo-router";
import {COLORS,icons,images,SIZES} from '../constants';
import {menu} from '../assets/icons/menu.png'
import {ScreenHeaderBtn} from "../components";
import Welcome from '../components/home/welcome/Welcome';
import Popularjobs from '../components/home/popular/Popularjobs';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';
const Home=()=>{
    const router=useRouter();
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"  />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle:""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    padding:SIZES.medium
                }}>
                    <Welcome/>
                <Popularjobs/>
                <Nearbyjobs/>
                </View>

            </ScrollView>
           
            </SafeAreaView>
    )
}
export default Home