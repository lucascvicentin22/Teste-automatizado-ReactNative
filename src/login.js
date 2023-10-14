const { useState, useEffect } = require("react")
const { StyleSheet, View, Text, TextInput, TouchableOpacity } = require("react-native")

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')


    const handleLogin = () => {
        console.log("PASSOU NO LOGIN")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} > Tela de Login </Text>

            <TextInput 
                placeholder = "Digite um e-mail..."
                value = {email}
                onChangeText = {setEmail}
                style = {styles.input}
            />

            <TextInput 
                placeholder="Digite o seu CPF..."
                value={cpf}
                onChangeText={setCpf}
                style = {styles.input}
            />

            <TextInput 
                    placeholder = "Digite a senha..."
                    value = {senha}
                    onChangeText = {setSenha}
                    style = {styles.input}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.botao}>
                <Text style={styles.botaoTexto}> Logar </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : {
            fontSize : 24,
            marginBottom : 20
        }

    },
    input : {
        width : '80%',
        height : 40,
        borderColor : 'gray',
        borderWidth : 1,
        paddingHorizontal : 10,
        marginBottom : 10
    },
    titulo : {
        fontSize : 24,
        marginBottom : 20
    },
    botao : {
        backgroundColor : 'blue',
        padding : 10,
        borderRadius : 5
    },
    botaoTexto : {
        color : 'white',
        fontSize : 18,
    }
})

export default Login