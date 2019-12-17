import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    StyleSheet,
    View,
    Text,
} from 'react-native';

let DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item({ id, title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default function App() {
    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ItemSeparatorComponent={({ highlighted }) => (
                    <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
                )}
                data={[{ title: 'Title Text', key: 'item1' }]}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        onPress={() => this._onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </SafeAreaView>
    );

    _onPress = (item) => {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
