import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        backgroundColor: '#e0e0e0',
        padding: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      },
    button: {
        color: 'white',
        padding: 20,
        backgroundColor: 'coral'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
      },
      completedText: {
        color: 'black',
        fontSize: 16,
        marginStart: 10,
      },
        descriptionText: {
            marginStart: 10,
            marginBottom: 10,
            color: 'black',
            fontSize: 16,
            },
    warning: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    warningText: {
        color: 'white'
    },
    switch: {
        trackColor: { false: 'red', true: 'green' },
        thumbColor: 'white',
    }
});

export default styles;