import css from './Error.Message.module.css'

const ErrorMessage = () => {
    return (
        <p className={css.error}>An error occurred while loading</p>
    )
}

export default ErrorMessage