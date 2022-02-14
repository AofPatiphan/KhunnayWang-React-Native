import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';

function OrderDetail({ route }) {
    console.log(route.params.item);
    const detail = route.params.item;
    console.log(detail);

    let unix_timestamp = detail.createdAt.seconds;
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
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.cardOrder}>
                <Text style={styles.orderNumber}>No.{detail.number}</Text>
                <Text style={styles.header}>ORDER </Text>
                <Text style={styles.orderDate}>
                    Date{' '}
                    <Text style={{ color: 'grey' }}>
                        &nbsp;&nbsp;{date.toISOString().split('T')[0]}
                    </Text>
                </Text>
                <Text style={styles.brand}>
                    Brand{' '}
                    <Text style={{ color: 'grey' }}>
                        &nbsp;&nbsp;{detail.brand}
                    </Text>
                </Text>

                {/* Descrtiption */}
                <View>
                    <Text style={styles.description}>Description </Text>
                    <Text style={styles.descriptionDetail}>
                        For{' '}
                        <Text style={{ color: 'grey' }}>
                            &nbsp;&nbsp;{detail.description.for}
                        </Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Type{' '}
                        <Text style={{ color: 'grey' }}>
                            &nbsp;&nbsp;{detail.description.type}
                        </Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Color/Favor{' '}
                        <Text style={{ color: 'grey' }}>
                            &nbsp;&nbsp;{detail.description.color}
                        </Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Qty{' '}
                        <Text style={{ color: 'grey' }}>
                            &nbsp;&nbsp;{detail.description.quantity}
                        </Text>
                    </Text>
                </View>

                {/* Payment */}
                <View>
                    <Text style={styles.header}>PAYMENT </Text>
                    {detail.payment.map((item, i) => {
                        return (
                            <View key={i}>
                                {/* <Text style={styles.brand}>
                                    {detail.payment.length} times
                                </Text> */}
                                <View style={styles.paymentDetail}>
                                    <Text style={styles.descriptionDetail}>
                                        amount&nbsp;&nbsp; {item.amount} Bath
                                    </Text>
                                    <View style={styles.checkIcon}>
                                        <Icon
                                            name={'ios-checkmark-outline'}
                                            color={'#ffffff'}
                                            size={20}
                                        />
                                    </View>
                                </View>
                                <View style={styles.paymentDetail}>
                                    <Text style={styles.descriptionDetail}>
                                        Tax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp; {item.tax} Bath
                                    </Text>
                                    <View style={styles.checkIcon}>
                                        <Icon
                                            name={'ios-checkmark-outline'}
                                            color={'#ffffff'}
                                            size={20}
                                        />
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>

                {/* Status */}
                <View style={styles.status}>
                    <Text style={styles.header}>STATUS</Text>
                    <View style={styles.backgroundStatusSlider}>
                        <View style={styles.statusSlider}>
                            <Text>&nbsp;</Text>
                        </View>
                    </View>
                    <View style={styles.statusIconContainer}>
                        <View style={styles.statusIcon}>
                            <IconAnt
                                name={'shoppingcart'}
                                color={'#738C72'}
                                size={24}
                            />
                            <Text style={styles.statusIconLabel}>Ordered</Text>
                        </View>
                        <View style={styles.statusIcon}>
                            <IconAnt
                                name={'home'}
                                color={'#738C72'}
                                size={24}
                            />
                            <Text style={styles.statusIconLabel}>China's</Text>
                            <Text style={styles.statusIconLabel}>
                                warehouse
                            </Text>
                        </View>
                        <View style={styles.statusIcon}>
                            <IconAnt
                                name={'home'}
                                color={'#738C72'}
                                size={24}
                            />
                            <Text style={styles.statusIconLabel}>
                                Thailand's
                            </Text>
                            <Text style={styles.statusIconLabel}>
                                warehouse
                            </Text>
                        </View>
                        <View style={styles.statusIcon}>
                            <Icon
                                name={'ios-location-sharp'}
                                color={'#42434730'}
                                size={24}
                            />
                            <Text style={styles.statusIconLabelPending}>
                                Ordered
                            </Text>
                        </View>
                        <View style={styles.statusIcon}>
                            <Icon
                                name={'person'}
                                color={'#42434730'}
                                size={24}
                            />
                            <Text style={styles.statusIconLabelPending}>
                                Ordered
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OrderDetail;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
    },
    cardOrder: {
        marginTop: 30,
        width: 340,
        height: 677,
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
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 17,
    },
    orderNumber: {
        fontSize: 18,
        color: '#566738',
        padding: 4,
    },
    header: {
        marginTop: 8,
        fontSize: 16,
        color: '#849A83',
        padding: 4,
    },
    orderDate: {
        fontSize: 14,
        padding: 4,
    },
    brand: {
        padding: 4,
        fontSize: 14,
    },
    description: {
        padding: 4,
        fontSize: 14,
    },
    descriptionDetail: {
        padding: 4,
        paddingLeft: 30,
        fontSize: 14,
    },
    paymentDetail: {
        width: 193,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 14,
        marginTop: 5,
    },
    checkIcon: {
        backgroundColor: '#E2E2E2',
        color: '#ffffff',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    checkedIcon: {
        backgroundColor: '#738C72',
        color: '#ffffff',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    backgroundStatusSlider: {
        marginTop: 20,
        width: '100%',
        height: 5,
        borderRadius: 10,
        backgroundColor: '#DADADA',
    },
    statusSlider: {
        width: '50%',
        height: 5,
        borderRadius: 10,
        backgroundColor: '#738C72',
    },
    status: {
        width: '100%',
    },
    statusIcon: {
        // flex: 1,
        alignItems: 'center',
    },
    statusIconContainer: {
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    statusIconLabel: {
        fontSize: 12,
        color: '#738C72',
    },
    statusIconLabelPending: {
        fontSize: 12,
        color: '#42434730',
    },
});
