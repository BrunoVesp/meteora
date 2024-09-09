import styles from './Input.module.css';

interface InputProps {
    placeholder?: string
    tipo: 'text' | 'email' | 'password' | 'number' | 'date'
    valor: string
    aoAlterado: (valor: string) => void
    requerido?: boolean
}

const Input = ({ placeholder, tipo, valor, aoAlterado, requerido = true}: InputProps) => {

    function aoDigitado(evento: React.ChangeEvent<HTMLInputElement>) {
        aoAlterado(evento.target.value);
    }

    return (
        <input
            required={requerido}
            className={styles.input}
            placeholder={placeholder}
            type={tipo}
            onChange={aoDigitado}
            value={valor}
        />
    )
}

export default Input;