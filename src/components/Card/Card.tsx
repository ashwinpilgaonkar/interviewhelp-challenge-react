import './Card.css';

const Card = () => {
    return (
        <div className='card-outer'>
            <section className='user-info'>
                <div className='user-avatar-parent'>
                    <image className='user-avatar'>D</image>
                </div>
                <section className='user-text'>
                    <h1>Daniel W. Ellis</h1>
                    <h5>Web Developer</h5>
                </section>
            </section>
            <div className='bottom-container'>
                <section className='conversion-info'>
                    <figure>FIGURE</figure>
                    <h6>Conversions 4/12 - 4/30</h6>
                </section>
                <div className='user-stats'>
                    <section>
                        <h5>20,345</h5>
                        <h6>impressions</h6>
                        <h5>1,987</h5>
                        <h6>conversions</h6>
                    </section>
                    <h3>$53,982</h3>
                </div>
            </div>
        </div>
    )
}

export default Card