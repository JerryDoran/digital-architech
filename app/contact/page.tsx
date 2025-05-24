import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16244.947963407196!2d-80.74605108132107!3d41.06947742887567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1748015682346!5m2!1sen!2sus'
            width='100%'
            height='100%'
            className='absolute inset-0'
            style={{ border: 0 }}
            // allowfullscreen={true}
            loading='lazy'
            // referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='px-4'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                ADDRESS
              </h2>
              <p className='mt-1 text-gray-700 text-sm'>Canfield, Ohio</p>
            </div>
            <div className='lg:w-1/2 px-4 sm:mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                EMAIL
              </h2>
              <a className='text-gray-500 leading-relaxed text-sm'>
                thewebarchitech@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 dark:bg-transparent border border-gray-700 rounded-lg p-4'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200'>
            Get In Touch
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600 dark:text-gray-200'>
            Have questions, feedback, or want to collaborate? Drop a message
            below!
          </p>
          <div className='relative mb-4'>
            <Label
              htmlFor='name'
              className='leading-7 text-sm text-gray-600 dark:text-gray-200'
            >
              Name
            </Label>
            <Input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-gray-200'
            />
          </div>
          <div className='relative mb-4'>
            <Label
              htmlFor='email'
              className='leading-7 text-sm text-gray-600 dark:text-gray-200'
            >
              Email
            </Label>
            <Input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-gray-200'
            />
          </div>
          <div className='relative mb-4'>
            <Label
              htmlFor='message'
              className='leading-7 text-sm text-gray-600 dark:text-gray-200'
            >
              Message
            </Label>
            <Textarea
              id='message'
              name='message'
              className='w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:text-gray-200 dark:bg-transparent'
            />
          </div>
          <Button>Send Message</Button>
          <p className='text-xs text-gray-500 mt-3'>
            Your privacy is important to us. We won&apos;t share your details
            with anyone.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
