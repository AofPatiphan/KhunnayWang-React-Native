import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const About = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.header}>Check Order Status</Text>
                <Text style={styles.subHeader}>
                    Please enter your twitter account to track your order status
                    (eg. @khunnaywang85)
                </Text>
                <TextInput
                    placeholderTextColor="lightgrey"
                    style={styles.input}
                    // value={text}
                    // onChangeText={setText}
                    placeholder="@account"
                    keyboardType="text"
                />
                <View style={styles.checkButton}>
                    <TouchableOpacity
                        style={styles.orderStatus}
                        onPress={() => navigation.navigate('Status')}
                    >
                        <Text style={styles.orderStatusText}>&nbsp;&nbsp;</Text>
                        <Text style={styles.orderStatusText}>Check</Text>
                        <View style={styles.orderStatusIcon}>
                            <Icon
                                name={'arrow-forward-outline'}
                                color={'#FFFFFF'}
                                size={24}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardOrder}>
                    <Text>No.1</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default About;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        padding: 35,
    },
    header: {
        fontSize: 25,
        marginTop: 30,
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'Cairo_400Regular',
    },
    subHeader: {
        fontSize: 15,
        fontFamily: 'Cairo_400Regular',
        width: 290,
        color: 'grey',
    },
    input: {
        width: '100%',
        height: 56,
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'lightgrey',
        color: '#000000',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
    },
    checkButton: {
        width: '100%',
        alignItems: 'center',
    },
    orderStatus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 145,
        borderRadius: 15,
        backgroundColor: '#738C72',
        height: 58,
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 9,
    },
    orderStatusText: {
        color: '#FFFFFF',
    },
    orderStatusIcon: {
        backgroundColor: '#849A83',
        borderRadius: 500,
        padding: 4,
    },
    cardOrder: {
        marginTop: 30,
        width: '100%',
        height: 145,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 13.0,

        elevation: 17,
    },
});
