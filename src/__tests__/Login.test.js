import React from "react";
import { render , fireEvent} from '@testing-library/react-native'
import Login from "../login";


describe('Login', () =>{
    it('Deve Renderizar a tela', () => {
        const {getByPlaceholderText} = render(<Login />)

        const emailInput = getByPlaceholderText('Digite um e-mail...')

        expect(emailInput).toBeDefined();
    });


    it('Deve existir campo senha', () => {
        const {getByPlaceholderText} = render(<Login />)

        const senhaInput = getByPlaceholderText('Digite a senha...')

        expect(senhaInput).toBeDefined()
    });

    it('Botão de clique Logar', () => {
        const { getByText } = render(<Login />)

        const loginBotao = getByText('Logar')

        fireEvent.press(loginBotao)
    });

    it('Deve existir o campo CPF', () => {
        const {getByPlaceholderText} = render(<Login />)

        const inputCpf = getByPlaceholderText('Digite o seu CPF...')

        expect(inputCpf).toBeDefined()
    });
})