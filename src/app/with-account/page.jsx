'use client';
import React, { useState } from 'react';
import styles from './withaccount.module.css';
import Image from 'next/image';
import Google from '../../../public/assets/google-icon.png';
import Question from '../../../public/assets/ponto-de-interrogacao.png';
import Voltar from '../../../public/assets/voltar.png';
import { users } from '../../../public/data';
import Correct from '../components/login-correct-message/page';
import Incorrect from '../components/login-error-message/page';
import OlhoAberto from '../../../public/assets/olho-aberto.png'
import OlhoFechado from '../../../public/assets/olho-fechado.png'

export default function WithAccount() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [messageEmailPassword, setMessageEmailPassword] = useState('')
    const [message, setMessage] = useState('') // Controla o conteúdo da mensagem
    const [showMessage, setShowMessage] = useState(false) // Controla a visibilidade da mensagem
    const [messageType, setMessageType] = useState('') // 'erro' ou 'sucesso'

    const ShowPasswordUser = (event) => {
        event.preventDefault(); // Previne a submissão do formulário
        setShowPassword(!showPassword)
    }

    const CloseMessage = () => { setShowMessage(false) }

    const ReceiveEmail = (email) => { setEmail(email) }
    const ReceivePassword = (password) => { setPassword(password) }

    const CheckValues = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário (impede a atualização da pagina)
        const userData = users.find(user => user.email === email && user.password === password) // Verifica se existe um usuário com os dados recebidos

        if (!email) {
            // Se o email estiver em branco
            setMessageEmailPassword('Il campo e-mail è vuoto.')
        } else if (!password) {
            // Se a estiver em branco
            setMessageEmailPassword('Il campo Password è vuoto.')
        }
        else if (userData) {
            // Se encontrar um usuário, mostre a mensagem de sucesso
            setMessageEmailPassword('')
            setMessageType('success')
            setMessage(`Effettuato con successo. Benvenuto ${userData.name}!`)
            setShowMessage(true)
        }
        else {
            // Se não encontrar o usuário, mostre mensagem de erro
            setMessageEmailPassword('')
            setMessage('Email o password errati')
            setMessageType('error')
            setShowMessage(true)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Accedi il tuo account</h1>
                {messageEmailPassword}
                {showMessage && messageType === 'error' && (<Incorrect message={message} functionProps={CloseMessage} />)}
                {showMessage && messageType === 'success' && (<Correct message={message} functionProps={CloseMessage} />)}
                <form className={styles.container_input} onSubmit={CheckValues}>
                    <p>Email <Image className={styles.icon_question} src={Question} alt='Interrogativo' title='Utilizzare le-mail login@outlook.com per testare la convalida dellaccesso' /></p>
                    <input type="email" name='email' value={email} onChange={(event) => ReceiveEmail(event.target.value)} placeholder='Inserisci la tua email' className={styles.input_account} />

                    <p>Password <Image className={styles.icon_question} src={Question} alt='Interrogativo' title='Utilizzare la password !123Testing per testare la convalida dellaccesso' /></p>
                    <input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(event) => ReceivePassword(event.target.value)} placeholder='Inserisci la tua password' className={styles.input_account} />
                    <button className={styles.button_eye} onClick={ShowPasswordUser}>
                        {showPassword ? <Image src={OlhoFechado} className={styles.icon_eye} alt='Occhio chiuso' /> : <Image src={OlhoAberto} className={styles.icon_eye} alt='Occhio aperto' />}
                    </button>

                    <button type='submit' className={styles.login_button}>Login</button>
                    <button className={styles.login_button}>Login con <Image src={Google} alt='Google' className={styles.icons_page} /></button>
                </form>

                <a href="" className={styles.recover_password} >Password dimenticata?</a>
                <a href="/" title='Ritorna alla home page' > <Image src={Voltar} className={styles.icons_page} alt='Freccia indietro' /> </a>
            </div>
        </div>
    )
}