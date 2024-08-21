'use client';
import React from 'react';
import { useState } from 'react';
import styles from './createaccount.module.css';
import Image from 'next/image';
import Voltar from '../../../public/assets/voltar.png';
import OlhoAberto from '../../../public/assets/olho-aberto.png'
import OlhoFechado from '../../../public/assets/olho-fechado.png'
import Correct from '../components/login-correct-message/page';

export default function CreateAccount() {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otherMessage, setOtherMessage] = useState('')
    const [messageSuccess, setMessageSuccess] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [showPassword, setShowPassword] = useState('')
    const [showConfirmPassword, setShowConfirmPassword] = useState('')

    const ShowUserPassword = (event) => { event.preventDefault(); setShowPassword(!showPassword) }
    const ShowConfirmUserPassword = (event) => { event.preventDefault(); setShowConfirmPassword(!showConfirmPassword) }
    const CloseMessage = () => { setShowMessage(false) }

    const CheckValues = (event) => {

        event.preventDefault()

        if (!name) { setOtherMessage('Inserisci il tuo nome.') }
        else if (!date) { setOtherMessage('Inserisci la tua data di nascita.') }
        else if (!email) { setOtherMessage('Inserisci la tua email.') }
        else if (!phone) { setOtherMessage('Inserisci il tuo numero di telefono.') }
        else if (!password) { setOtherMessage('Inserisci una password.') }
        else if (!confirmPassword) { setOtherMessage('Conferma la tua password.') }
        else if (password != confirmPassword) { setOtherMessage('Conferma password errata, riprova.') }
        else if (password.length < 6) { setOtherMessage('La password deve contenere sei o più caratteri.') }
        else {
            setOtherMessage('')
            setMessageSuccess(`Utente creato con successo. Benvenuto ${name}!`)
            setShowMessage(true)
        }
    }

    const ReceiveName = (name) => { setName(name) }
    const ReceiveDate = (date) => { setDate(date) }
    const ReceiveEmail = (email) => { setEmail(email) }
    const ReceivePhone = (phone) => { setPhone(phone) }
    const ReceivePassword = (password) => { setPassword(password) }
    const ReceiveConfirmPassword = (confirmPassword) => { setConfirmPassword(confirmPassword) }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Crea il tuo account</h1>

                {otherMessage}
                {showMessage && (<Correct message={messageSuccess} functionProps={CloseMessage} />)}

                <div className={styles.container_input}>
                    <form onSubmit={CheckValues} >
                        <p>Nome completo</p>
                        <input type="text" name='name' value={name} onChange={(event) => ReceiveName(event.target.value)} placeholder='Vinicius Jose De Biasi' className={styles.input_account} />
                        <p>Data di nascita</p>
                        <input type="date" name='date' value={date} onChange={(event) => ReceiveDate(event.target.value)} className={styles.input_account} />
                        <p>Email</p>
                        <input type="email" name='email' value={email} onChange={(event) => ReceiveEmail(event.target.value)} placeholder='viniciusdebiasi23@gmail.com' className={styles.input_account} />
                        <p>Telefono</p>
                        <input type="phone" name='phone' value={phone} onChange={(event) => ReceivePhone(event.target.value)} placeholder='+31 339 9571' className={styles.input_account} />
                        <p>Password</p>
                        <input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(event) => ReceivePassword(event.target.value)} className={styles.input_account} />
                        <button className={styles.button_eye_1} onClick={ShowUserPassword}>
                            {showPassword ? <Image src={OlhoFechado} className={styles.icon_eye} /> : <Image src={OlhoAberto} className={styles.icon_eye} />}
                        </button>
                        <p>Conferma password</p>
                        <input type={showConfirmPassword ? 'text' : 'password'} name='confirmPassword' value={confirmPassword} onChange={(event) => ReceiveConfirmPassword(event.target.value)} className={styles.input_account} />
                        <button className={styles.button_eye} onClick={ShowConfirmUserPassword}>
                            {showConfirmPassword ? <Image src={OlhoFechado} className={styles.icon_eye} alt='Occhio chiuso' /> : <Image src={OlhoAberto} className={styles.icon_eye} alt='Occhio aperto' />}
                        </button>
                        <button type='submit' className={styles.register_button}>Registrati ora</button>
                    </form>
                </div>

                <a href="/" title='Ritorna alla home page' ><Image src={Voltar} className={styles.icons_page} alt='Freccia indietro' /></a>
            </div>
        </div>
    )
}