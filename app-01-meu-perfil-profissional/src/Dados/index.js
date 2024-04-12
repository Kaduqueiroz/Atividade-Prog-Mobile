import { View, Text, Image } from 'react-native';

function App() {
    let nome = 'Carlos Queiroz';
    let img = 'https://a.storyblok.com/f/112937/568x464/0445bcef27/english_rugby_terms_hero.jpg/m/620x0/filters:quality(70)/';

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ marginTop: 20, marginBottom: 20 }}>App Meu Perfil</Text> {/* Adicionando margem superior e inferior */}
           
            <Image
                source={{ uri: img }}
                style={{ width: 300, height: 300 }}
            />
            <Text style={{ fontSize: 30 }}>{nome}</Text>
        </View>
    )
}

export default App;


