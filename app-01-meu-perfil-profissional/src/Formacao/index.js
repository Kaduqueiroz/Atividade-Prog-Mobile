import { View, Text } from 'react-native';
import {styles} from './styles'


function Formacao(){
  return(
    <View>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
    <Text>Formado na FMU no ano de 2012</Text>
    <Text>Cursando ADS - Fatec Praia Grande</Text>
</View>

  )
}


export default Formacao;
