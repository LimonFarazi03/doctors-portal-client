import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
  return (
    <div class="hero min-h-screen" style={{width:'%',backgroundImage: `url(${bgImage})`}}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img width={'100%'} src={chair} class="max-w-lg" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Started <br/> <span className='mt-2'>Here</span></h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
  );
};

export default Banner;