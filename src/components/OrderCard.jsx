import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function OrderCard({ item, navigation }) {
    console.log(item);
    let unix_timestamp = item.createdAt.seconds;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = '0' + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = '0' + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
        hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(date);

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Order Detail', {
                    item,
                })
            }
            style={{ alignItems: 'center' }}
        >
            <View style={styles.cardOrder}>
                <Text style={styles.orderNumber}>NO.{item.number}</Text>
                <Text style={styles.orderType}>
                    ORDER {item.description.type}
                </Text>
                <Text style={styles.orderDate}>
                    Date : {date.toISOString().split('T')[0]}
                </Text>
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
        width: 320,
        height: 145,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.0,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        elevation: 10,
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
