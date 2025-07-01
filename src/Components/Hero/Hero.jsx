import './Hero.css'
import profile_img from '../../assets/profile_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <h1>About Me</h1>
            <img src={profile_img} alt=''width={200} height={200}/>
            <h2><span>I'm John Vincent Baga!</span></h2>
            <p>I am a 3rd year student, currently studying for BSCPE under Technological Instute of the Philippines Manila. I chose Data Science for my course elective, and have experience involving Machine Learning Algorithms. </p>
            <div className='hero-action'>
                <div className="hero-connect">Connect With Me</div>
            </div>
        </div>
    )
}

export default Hero