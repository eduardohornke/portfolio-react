import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Oi. Sou o Eduardo, prazer em conhecê-lo.</p>
            </div>
            <div>
              <p>Sou Estudante, 26 anos, busco uma oportunidade de trabalhar junto a um time colaborativo
              e desafiador onde eu possa desenvolver a minha carreira e impactar a vida
              de milhares de usuários fornecendo soluções tecnológicas para os mais diversos problemas.
</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
