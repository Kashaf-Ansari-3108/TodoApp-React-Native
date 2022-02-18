import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  
 button: {
    marginRight: 10,
  },
  listContainer: {
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
    padding: 15
  },
  
  
});



function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [indexVAL, setindexVal] = useState()

  const add = () => {
    if (isEdit) {
      // editing 
      list[indexVAL] = text
      setList([...list])
      setIsEdit(false)
      setText('')
    } else {
      //add
      setList([...list, text])
      setText('')
    }

  }
  const del = () => {
    setList([]);
  }

  const deleteTodo = (ind) => {
    list.splice(ind, 1)
    setList([...list])
  }
  const editTodo = (ind) => {
    setText(list[ind])
    setIsEdit(true)
    setindexVal(ind)
  }
  return <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>ADD TODO LIST</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Add task...." placeholderTextColor={'#999'} value={text} onChangeText={(e) => setText(e)} />

          <View style={styles.button}>
            <Button title={'ADD'} onPress={add} />
          </View>
          <View style={styles.button}>
            <Button title={'DELETE ALL'} onPress={del} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.listContainer}>
         
          {list.map((e, i) => <View style={styles.container2} key={i}>
              <Text style={styles.text}> {e}</Text>
              <View style={styles.button}>
                <Button title={'EDIT'} onPress={() => editTodo(i)} />
              </View>
              <View style={styles.button}>
                <Button title={'DELETE'} onPress={() => deleteTodo(i)} />
              </View>
              </View>)}
          
          
          </ScrollView>
      
      </View>

    </SafeAreaView>
</>
}
export default App
