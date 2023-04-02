const About = () => {
  return (
    <div id='aboutme' className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-600">About Me</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">A little about me.</h1>
        <p className="mt-6 text-xl leading-8">
        My name is <strong>Tony Kang</strong>. I am an IT professional turned Software Developer/Fullstack Engineer.
        </p>
        <div className="mt-10 max-w-3xl">
          <p className="mt-8">
          My interest in technology began during the internet boom of the early 2000s. While growing up, I originally had a passion for the creative arts but I found myself drawn toward the tech industry as I learned how to build and troubleshoot computers, create websites using basic html/css (on old myspace, xanga, geocities etc...), and played around with creating private servers of various MMORPGs.
          </p>

          <p className="mt-8">
          Upon entering the workforce after college with an Information Systems degree and a specailization in application development, I had the opportunity to learn, integrate, and manage business systems at a start up, which took over me as it was a lot of fun. After developing an internal FAQ page using HTML/CSS/Javascript, It made me realize how much I really enjoyed the process of software development compared to the infrastructure side of IT, and I wished to continue pursuing it.
          </p>
          <p  className="mt-8">
          This experience led me to start studying after hours, which then led me to leave my role as an IT Manager and enroll in a Software Engineering Bootcamp to focus on it entirely. I appreciate the ability to create something beautiful and useful through web and application development, and it gives me the same feeling of fulfillment that art does, especially with front-end work. My artistic hobbies remain a personal interest, but development has become my primary career focus because of the joy it brings me to create something new and useful.
          </p>

          <p  className="mt-8">
          Interested in learning more? Reach out to me at tony.andrew.kang@gmail.com.
          </p>
          <p  className="mt-8">
          Here is my <strong><a href="https://drive.google.com/file/d/1KoUhfCpKzQQt1k479rYSdIa5wdjZ6PLp/view" className="text-blue-600"
          >resume</a></strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
