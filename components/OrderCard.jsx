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

function OrderCard({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={styles.cardOrder}>
                <Text style={styles.orderNumber}>No.1</Text>
                <Text style={styles.orderType}>ORDER xxxx</Text>
                <Text style={styles.orderDate}>Date : 30 Nov 2020</Text>
                <Text style={styles.showMoreDetail}>
                    Click for more details...
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default OrderCard;

const styles = StyleSheet.create({
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
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        elevation: 17,
    },
    orderNumber: {
        fontSize: 12,
        color: '#849A83',
        padding: 4,
    },
    orderType: {
        fontSize: 18,
        padding: 4,
    },
    orderDate: {
        fontSize: 18,
        padding: 4,
    },
    showMoreDetail: {
        color: '#849A83',
        padding: 4,
        fontSize: 14,
    },
});
