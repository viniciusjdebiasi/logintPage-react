import styles from './incorrect.module.css';
import Image from 'next/image';
import Excluir from '../../../../public/assets/excluir.png';

export default function Incorrect({ functionProps, message }) {
    return (
        <div className={styles.main}>
            <div className={styles.container_message}>
                <div className={styles.message}>
                    <Image src={Excluir} className={styles.icons_page} />
                    <h3> {message} </h3>
                </div>

                <button onClick={functionProps} className={styles.exit_button}>Riprova</button>
            </div>
        </div>
    )
}