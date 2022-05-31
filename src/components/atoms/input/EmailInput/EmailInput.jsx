import './emailInput.scss'

const EmailInput = () => {
    return (
        <section className="emailInput">
            <form action="">
                <input
                    type="text"
                    className="enterEmail"
                    placeholder="여기에 이메일을 입력하세요"
                />
            </form>
        </section>
    )
}

export default EmailInput
