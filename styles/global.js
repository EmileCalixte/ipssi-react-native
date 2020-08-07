import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    center: {
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    itemListItemContainer: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemListItemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemListTitle: {
        fontSize: 18,
    },
    itemListRating: {
        fontSize: 12,
        color: '#888',
    },
    itemListImage: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
});