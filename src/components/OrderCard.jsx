import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function OrderCard({ item, navigation }) {
    let unix_timestamp = item.createdAt.seconds;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    var formattedTime =
        hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={styles.orderNumber}>NO.{item.number}</Text>
                    {item.status === 5 ? (
                        <Text style={styles.orderNumber}>Done</Text>
                    ) : (
                        <></>
                    )}
                </View>
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
