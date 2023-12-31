import React, { useState } from 'react'
import { View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
  Text } from 'react-native'

  import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons,SIZES} from '../../../constants';

const jobType=["Full-time","Part-time","Contract"]
const Welcome = () => {
  const router=useRouter();
  const [activeJobType,setActiveJobType]=useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Jayant</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}
        value=''
        onChange={()=>{}}
        placeholder='What are you looking for?'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image
        source={icons.search}
        resizeMode='contain'
        style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.tabsContainer}>
      <FlatList
      data={jobType}
      renderItem={({item})=>(
        <TouchableOpacity style={styles.tab(activeJobType,item)}
        onPress={()=>{
          setActiveJobType(item);
          router.push(`/Search/${item}`)
        }}
        >
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item=>item}
      contentContainerStyle={{columnGap:SIZES.small}}
      horizontal
      />
       </View>
    </View>
  )
}

export default Welcome