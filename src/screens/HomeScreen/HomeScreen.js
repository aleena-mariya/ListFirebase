import React,{ useState } from 'react';
import {StyleSheet,View,Button,FlatList,Text} from 'react-native'
//import AboutScreen from './AboutScreen/AboutScreen'
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';
import styles from './styles';



export default function HomeScreen({navigation}) {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const onHeaderLinkPress = () => {
     navigation.navigate('AboutScreen')
        
      };
    const onHeaderPress=() => {
      navigation.navigate('LoginScreen')
    };

    const onimage=()=>{
      navigation.navigate('ImageScreen')
    };
    const onlocation=()=>{
      navigation.navigate('LocationScreen')
    };
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
        
      <View style={styles.screen}>

      
           <Text onPress={onHeaderLinkPress} style={styles.headerLink}>
         About
        </Text>
        <Text onPress={onimage} style={styles.image}>Image</Text>
        <Text onPress={onlocation} style={styles.location}>location</Text>
        <Text onPress={onHeaderPress} style={styles.header}> SignOut</Text>

        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
          
       
       
       
      </View>
    
    
        
    );
  }