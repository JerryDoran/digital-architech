import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-32'>
        <div className='w-full max-w-4xl p-8 shadow-lg rounded-lg'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0'>
              <div className='relative w-48 h-48 rounded-full overflow-hidden'>
                <Image
                  src='/logo.jpg'
                  alt='Profile'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-full'
                />
              </div>
            </div>
            <div className='w-full md:w-2/3 flex flex-col justify-center'>
              <h1 className='text-4xl font-bold dark:text-gray-200 text-gray-800 mb-4'>
                About Me
              </h1>
              <p className='text-gray-600 text-lg mb-4 dark:text-gray-400'>
                Hello! I&apos;m Jerry, a passionate software developer and tech
                enthusiast. I created this blog to share my experiences, tips,
                and years of experience with technologies to help small
                businesses. I believe that learning should be a continuous
                journey, and I&apos;m here to help small businesses master the
                art of successfully integrating technology into their business.
              </p>
              <p className='text-gray-600 text-lg dark:text-gray-400'>
                Whether you&apos;re just starting out to understand how a
                website can help your business or looking to enhance your tech
                or marketing skills, you&apos;ll find a variety of resources and
                insights here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Harry&apos;Journey as a Coder
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              From curious beginner to seasoned developer, here&apos;how Harry
              navigated the world of programming.
            </p>
          </div>
          <div className='space-y-12'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/3'>
                <img
                  src='/3.jpg'
                  alt='Harry as a beginner'
                  className='w-full rounded-lg shadow-lg'
                />
              </div>
              <div className='md:w-2/3 md:pl-8 mt-8 md:mt-0'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  The Spark of Curiosity
                </h3>
                <p className='mt-4 text-gray-600'>
                  Harry’s coding journey began in high school when he stumbled
                  upon his first programming language—Python. What started as a
                  simple curiosity quickly turned into a passion, as Harry spent
                  countless hours experimenting with code, building small
                  projects, and learning the fundamentals of software
                  development.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center'>
              <div className='md:w-1/3'>
                <img
                  src='/2.jpg'
                  alt='Harry learning new skills'
                  className='w-full rounded-lg shadow-lg'
                />
              </div>
              <div className='md:w-2/3 md:pr-8 mt-8 md:mt-0'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  Diving Deeper
                </h3>
                <p className='mt-4 text-gray-600'>
                  After mastering the basics, Harry’s thirst for knowledge grew.
                  He began exploring more complex topics such as data
                  structures, algorithms, and web development. Enrolling in
                  online courses and attending coding bootcamps, Harry quickly
                  expanded his skill set, taking on freelance projects to apply
                  his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/3'>
                <img
                  src='/1.jpg'
                  alt='Harry working on a big project'
                  className='w-full rounded-lg shadow-lg'
                />
              </div>
              <div className='md:w-2/3 md:pl-8 mt-8 md:mt-0'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  Taking on Challenges
                </h3>
                <p className='mt-4 text-gray-600'>
                  With several years of experience under his belt, Harry began
                  tackling more significant challenges. From contributing to
                  open-source projects to developing his own applications, Harry
                  continued to push his limits, always looking for opportunities
                  to learn and grow. His journey wasn’t without its setbacks,
                  but each obstacle was a stepping stone to becoming the skilled
                  developer he is today.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center'>
              <div className='md:w-1/3'>
                <img
                  src='/4.jpg'
                  alt='Harry mentoring others'
                  className='w-full rounded-lg shadow-lg'
                />
              </div>
              <div className='md:w-2/3 md:pr-8 mt-8 md:mt-0'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  Giving Back
                </h3>
                <p className='mt-4 text-gray-600'>
                  Today, Harry is not only a proficient coder but also a mentor
                  to others. He regularly contributes to the programming
                  community by writing tutorials, giving talks, and helping new
                  coders find their footing in the world of software
                  development. For Harry, coding is more than just a
                  profession—it’s a lifelong journey of learning and sharing
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
