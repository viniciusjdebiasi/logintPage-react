import styles from './correct.module.css';
import Image from 'next/image';
import Sucesso from '../../../../public/assets/marca-de-verificacao.png';

export default function Correct({ functionProps, message }) {
    return (
        <div className={styles.main}>
            <div className={styles.container_message}>
                <div className={styles.message}>
                    <Image src={Sucesso} className={styles.icons_page} />
                    <h3>{message}</h3>
                </div>

                <button onClick={functionProps} className={styles.exit_button}>Close</button>
            </div>
        </div>
    )
}