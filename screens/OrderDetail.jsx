import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function OrderDetail() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.cardOrder}>
                <Text style={styles.orderNumber}>No.1</Text>
                <Text style={styles.header}>ORDER </Text>
                <Text style={styles.orderDate}>
                    Date{' '}
                    <Text style={{ color: 'grey' }}>
                        &nbsp;&nbsp;30 Nov 2020
                    </Text>
                </Text>
                <Text style={styles.brand}>
                    Brand{' '}
                    <Text style={{ color: 'grey' }}>&nbsp;&nbsp;Bananain</Text>
                </Text>

                {/* Descrtiption */}
                <View>
                    <Text style={styles.description}>Description </Text>
                    <Text style={styles.descriptionDetail}>
                        For{' '}
                        <Text style={{ color: 'grey' }}>&nbsp;&nbsp;WYB</Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Type{' '}
                        <Text style={{ color: 'grey' }}>
                            &nbsp;&nbsp;รองเท้า
                        </Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Color/Favor{' '}
                        <Text style={{ color: 'grey' }}>&nbsp;&nbsp;ฟ้า</Text>
                    </Text>
                    <Text style={styles.descriptionDetail}>
                        Qty 1Ea / - Set{' '}
                    </Text>
                </View>

                {/* Payment */}
                <View>
                    <Text style={styles.header}>PAYMENT </Text>
                    <View>
                        <Text style={styles.brand}>1 times</Text>
                        <View style={styles.paymentDetail}>
                            <Text style={styles.descriptionDetail}>
                                _ _ _ _ Bath
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
                    <Text style={styles.brand}>2 times</Text>
                    <View style={styles.paymentDetail}>
                        <Text style={styles.descriptionDetail}>
                            1 _ _ _ _ Bath
                        </Text>
                        <View style={styles.checkedIcon}>
                            <Icon
                                name={'ios-checkmark-outline'}
                                color={'#ffffff'}
                                size={20}
                            />
                        </View>
                    </View>
                    <View style={styles.paymentDetail}>
                        <Text style={styles.descriptionDetail}>
                            1 _ _ _ _ Bath
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

                {/* Status */}
                <View>
                    <Text style={styles.header}>STATUS</Text>
                    <View style={styles.backgroundStatusSlider}>
                        <View style={styles.statusSlider}>
                            <Text>&nbsp;</Text>
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
        width: 327,
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
        paddingLeft: 30,
        paddingRight: 30,
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
});
