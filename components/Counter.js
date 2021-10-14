import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useSelector,useDispatch } from 'react-redux';
import { additon,subtraction } from '../store/actions';
export default function Counter(props) {
    const count = useSelector((state) =>state.counter);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addBtn} onPress={()=>dispatch(additon())}  ><View><Text style={styles.addBtnText}>Add</Text></View></TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity style={styles.subBtn} onPress={()=>dispatch(subtraction())} ><View><Text style={styles.subBtnText}>Subtract</Text></View></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addBtnText: {
        color: 'green',
        fontSize: 50
    },
    subBtnText: {
        color: 'red',
        fontSize: 50
    },
    count: {
        color: 'blue',
        fontSize: 90
    },
    addBtn:{
        backgroundColor:'gray'
    },
    subBtn:{
        backgroundColor:'gray'
    }
})
