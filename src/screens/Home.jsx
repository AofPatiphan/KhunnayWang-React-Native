import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Image,
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.header}>KHUNNAYWANG</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://res.cloudinary.com/dbtlgaii3/image/upload/v1644699867/dde7b031765bbf67d0a8a3530e56dbfa_vrg30d.jpg',
                    }}
                />
                <TouchableOpacity
                    style={styles.orderStatus}
                    onPress={() => navigation.navigate('Status')}
                >
                    <Text style={styles.orderStatusText}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.orderStatusText}>ORDER STATUS</Text>
                    <View style={styles.orderStatusIcon}>
                        <Icon
                            name={'arrow-forward-outline'}
                            color={'#FFFFFF'}
                            size={24}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Home;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
    },
    tinyLogo: {
        margin: 30,
        width: 100,
        height: 100,
        borderRadius: 500,
    },
    container: {
        alignItems: 'center',
    },
    orderStatus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 271,
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
        marginTop: 10,
    },
    orderStatusText: {
        color: '#FFFFFF',
        fontFamily: 'Cairo_400Regular',
    },
    orderStatusIcon: {
        backgroundColor: '#849A83',
        borderRadius: 500,
        padding: 4,
    },
    header: {
        fontSize: 25,
        fontFamily: 'Cairo_400Regular',
    },
});
