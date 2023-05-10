import image1 from '../../../assets/images/about_us/person.jpg'
import image2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={image1} className=" w-3/4 rounded-lg shadow-2xl" />
    <img src={image2} className="absolute right-5 w-1/2 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <p className='font-bold text-orange-500'>About us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="font-bold">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
      <p className="font-bold">the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;
