import './Card.css';

const Card = (props: Card) => {
   const {avatarURL, name, title, chartURL, impressions, conversions, dollar} = props
    return (
        <div className='card-outer'>
            <section className='user-info'>
                <div className='user-avatar-parent'>
                    <image className='user-avatar'>D</image>
                </div>
                <section className='user-text'>
                    <h1>{name}</h1>
                    <h5>{title}</h5>
                </section>
            </section>
            <div className='bottom-container'>
                <section className='conversion-info'>
                    <figure>FIGURE</figure>
                    <h6>Conversions 4/12 - 4/30</h6>
                </section>
                <div className='user-stats'>
                    <section>
                        <h5>{impressions}</h5>
                        <h6>impressions</h6>
                        <h5>{conversions}</h5>
                        <h6>conversions</h6>
                    </section>
                    <h3>${dollar}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card