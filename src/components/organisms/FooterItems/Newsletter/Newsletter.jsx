import EmailInput from '../../../atoms/input/EmailInput/EmailInput'
import './newsletter.scss'

const NewsLetter = () => {
    return (
        <section className="newletter">
            <div className="newletterTitle">뉴스레터에 가입하세요</div>
            <EmailInput />
        </section>
    )
}

export default NewsLetter
