
import Questions from './Questions';
import Content from './Content';

const Faq = () => {
  return (
    <div className='flex  md:mt-[3em] mt-[2em]  flex-col lg:flex-row   justify-between'>
      <div className='flex w-full lg:max-w-[35%] items-start justify-center mb-8 lg:mb-0'>
        <Content />
      </div>
      <div className='flex w-full lg:max-w-[60%] items-start justify-center'>
        <Questions />
      </div>
    </div>
  );
}

export default Faq;