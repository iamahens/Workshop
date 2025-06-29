import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Users, Target, Lightbulb } from 'lucide-react';
import Testimonialsection from './components/Testimonialsection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 58
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "01. Who is this workshop best suited for?",
      answer: "Anyone who wants to start earning online without prior experience."
    },
    {
      question: "02. Will I learn how to work from home?",
      answer: "Yes, the workshop focuses on remote work and online income methods."
    },
    {
      question: "03. Can I join if I’ve never earned online before?",
      answer: " Yes, it's designed for complete beginners."
    },
     {
      question: "04.Will this workshop help me become financially independent?",
      answer: " Yes, it's a great first step toward self-dependence.."
    },
     {
      question: "05.How soon can I start earning after the workshop?",
      answer: " Some people earn within a week, others take a month—depends on action. interdum posuere."
    },
    {
      question: "06.Will I be guided step-by-step?",
      answer: " A non-exhaustive list of forty questions (21 design and 19 business) that have helped me understand the business and users while starting on a new project. Some are broad and can have variations, some are specific. However, all of them apply to both product and service companies."
    }
  ];

  const learningPoints = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Training",
      description: "Train 1,000+ people to earn money through practical skills, mentorship, and real opportunities—empowering financial freedom and long-term growth."
    },
    {
      icon: <User className="w-8 h-8 text-blue-400" />,
      title: "Webinar",
      description: "Your website is the face of your business—invest in it as much as you do in your branding, design, and first impressions."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Work from Home",
      description: "iDigitalPreneur offers work from home opportunities to learn skills and earn using social media."
    },
    
  ];

  

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1e2939]/80 py-4 shadow-md border-b border-gray-700">
  <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
    
    {/* Logo */}
    <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
      Remote Work Strategies
    </div>

    {/* Navigation */}
    <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
      <a href="#learn" className="text-gray-300 hover:text-pink-400 text-sm xl:text-base transition-colors duration-300">
        What You'll Learn
      </a>
      <a href="#mentor" className="text-gray-300 hover:text-purple-400 text-sm xl:text-base transition-colors duration-300">
        Mentor
      </a>
      <a href="#testimonials" className="text-gray-300 hover:text-blue-400 text-sm xl:text-base transition-colors duration-300">
        Testimonials
      </a>
      <a href="#faqs" className="text-gray-300 hover:text-cyan-400 text-sm xl:text-base transition-colors duration-300">
        FAQs
      </a>
      <a
        href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-4 py-2 rounded text-white text-sm xl:text-base transition-all duration-300 shadow-md"
        >
          WhatsApp Now
        </button>
      </a>
    </nav>

    {/* Mobile Button */}
    <button
      onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
      className="lg:hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-3 py-2 rounded text-white text-sm transition-all duration-300 shadow"
    >
      Register
    </button>
  </div>
</header>


      {/* Hero Section */}
      {/* <section className="py-8 sm:py-12 lg:py-16"> */}
        {/* <div className="container mx-auto px-2 sm:px-6"> */}
     <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
  {/* Glow Background */}
  <div className="absolute w-full max-w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] opacity-30 blur-3xl z-0"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 container mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left Column: Text */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
        Unlock Your Potential with Our Exclusive Webinar
      </h1>
      <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl">
        Join industry experts for an immersive experience designed to elevate your skills and career.
      </p>
      <a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!">
      <button
        onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
        className="bg-pink-500 hover:bg-pink-600 px-6 sm:px-8 py-3 rounded-lg text-white font-semibold text-base sm:text-lg transition-colors shadow-lg"
      >
        WhatsApp Now
      </button>
      </a>
    </div>

    {/* Right Column: Image */}
    <div className="flex-1 w-full max-w-md">
      <img
        src="https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/Untitled-design-11.png"
        alt="Webinar Illustration"
        className="w-full h-auto rounded-xl shadow-lg object-cover"
      />
    </div>
  </div>
</div>



        {/* </div> */}
      {/* </section> */}

      {/* Countdown Timer */}
   <section className="py-6 sm:py-8 relative bg-gray-900 overflow-hidden border border-gray-800">
  {/* Gradient Glow Background */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] blur-3xl opacity-20"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="flex justify-center space-x-3 sm:space-x-6 lg:space-x-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 min-w-[60px] sm:min-w-[70px] lg:min-w-[80px] shadow-[0_0_20px_rgba(255,0,204,0.3)]">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              {item.value}
            </div>
          </div>
          <div className="text-gray-400 mt-2 text-xs sm:text-sm">{item.label}</div>
        </div>
      ))}
    </div>

    {/* Seats Left Badge */}
    <div className="flex items-center justify-center text-center mt-6 sm:mt-8">
      <span className="text-white text-base sm:text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-2 rounded-full shadow-lg">
        25 Seats Left
      </span>
    </div>
  </div>
</section>


<section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 py-12">
  {/* Floating Starry Background */}
  <div className="absolute inset-0 z-0 bg-[url('/stars-bg.png')] bg-cover opacity-10 animate-pulse"></div>

  {/* Central Glow Effect */}
  <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] blur-[120px] opacity-20 z-0"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center max-w-5xl space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      The Next Worth
    </h1>
    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
      Your journey from dreams to reality starts here! Come now and reshape your future with the strategies that pay.
    </p>

    {/* Video Player */}
    <div className="w-full max-w-4xl mt-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
      <video
        src="/vdo1.png"
        autoPlay
        loop
        muted
        playsInline
        controls
        className="w-full h-auto"
      />
    </div>

    {/* Button */}
    <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
      WhatsApp Now!
    </button>
  </div>
</section>


      {/* What You'll Learn */}
      <section id="about" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className=" flex justify-center text-2xl sm:text-5xl font-bold mb-8 sm:mb-12">About the webinar</h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {learningPoints.map((point, index) => (
              <div key={index} className="relative group p-2">
  {/* Hover Background Glow */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 opacity-30  group-hover:opacity-100 transition-opacity duration-300 blur-md z-0"></div>

  {/* Actual Content Card */}
  <div className="relative z-10 bg-gray-800 rounded-lg p-4 sm:p-6">
    <div className="mb-3 sm:mb-4">{point.icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{point.title}</h3>
    <p className="text-gray-400 text-sm sm:text-base mb-4">{point.description}</p>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

<section id="gallery" className="relative py-12 sm:py-16 overflow-hidden">
  {/* Top-left hue glow */}
  <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#00ffff,_#ff00cc,_#3333ff)] blur-[120px] opacity-20 z-0"></div>
<div className="absolute w-full max-w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] opacity-30 blur-3xl z-0"></div>
  {/* Bottom-right hue glow */}
  <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] blur-[120px] opacity-20 z-0"></div>

  <div className="relative z-10 container mx-auto px-4 sm:px-6">
    <GallerySection />
  </div>
</section>

      {/* About the Mentor */}
   <section id="mentor" className="relative py-20 sm:py-28 bg-[#1e2939] overflow-hidden">
  {/* Central Blue Glow */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,_#dc2eff9f_10%,_transparent_70%)] blur-[100px] opacity-20"></div>
  </div>

  {/* Top-left Purple Glow */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#9333ea,_transparent)] blur-[100px] opacity-25 z-0"></div>

  {/* Bottom-right Pink Glow */}
  <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#ff00cc,_transparent)] blur-[100px] opacity-25 z-0"></div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center md:text-left leading-tight tracking-wide">
      About the Mentor
    </h2>

    <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10">
      {/* Mentor Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.4)]">
        <img
          src="./workshop2.jpeg"
          alt="Ms. Anya Sharma"
          className=" w-full h-100 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Mentor Info */}
     <div className="flex-1 text-white mt-6 sm:mt-10 px-4 sm:px-0">
  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center sm:text-left">
    Ms. Anya Sharma
  </h3>

  <p className="text-cyan-300 mb-4 text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-center sm:text-left">
    Leading Expert in Remote Work
  </p>

  <p className="text-gray-300 text-base sm:text-lg leading-relaxed tracking-wide text-center sm:text-left max-w-xl mx-auto sm:mx-0">
    Ms. Sharma is a renowned expert in remote work and strategy, with over 15 years of experience in the tech industry. She has helped numerous companies transition to remote work and has contributed to various training programs at Fortune 500 companies.
  </p>
</div>

    </div>
  </div>
</section>



      {/* Meet the Moments */}
   <section id="testimonials" className="relative py-16 sm:py-24 bg-[#1e2939] overflow-hidden">
  {/* Centered Glow Behind Content */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className=" w-full max-w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#3b82f6,_#9333ea,_transparent)] blur-[120px] opacity-40"></div>
  </div>

  {/* Top-left Glow */}
  <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#9333ea,_transparent)] blur-[130px] opacity-35 z-0"></div>

  {/* Bottom-right Glow */}
  <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#ff00cc,_transparent)] blur-[130px] opacity-35 z-0"></div>

  {/* Foreground Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6">
    <h2 className="flex justify-center text-2xl sm:text-5xl font-bold text-white mb-8 sm:mb-12 text-center md:text-left">
      Meet the Moments
    </h2>

    <Testimonialsection />
  </div>
</section>


      {/* FAQs */}
      <section id="faqs" className="relative py-16 sm:py-24 bg-[#1e2939] overflow-hidden">
  {/* Central Glow */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,_#3b82f6,_#9333ea,_transparent)] blur-[120px] opacity-30"></div>
  </div>

  {/* Top-left Glow */}
  <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#00ffff,_transparent)] blur-[120px] opacity-30 z-0"></div>

  {/* Bottom-right Glow */}
  <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#ff00cc,_transparent)] blur-[120px] opacity-30 z-0"></div>

  <div className="relative z-10 container mx-auto px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">FAQs</h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,0,204,0.25)]"
        >
          <button
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center hover:bg-gray-700 transition-colors"
            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
          >
            <span className="font-semibold text-sm sm:text-base text-white">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-white transition-transform duration-300 ${
                expandedFAQ === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`px-4 sm:px-6 transition-all duration-500 ease-in-out overflow-hidden ${
              expandedFAQ === index ? 'max-h-96 opacity-100 py-4 sm:py-6' : 'max-h-0 opacity-0 py-0'
            }`}
          >
            <p className="text-white text-sm sm:text-base">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Registration  */}
     <section id="registration" className="relative py-16 sm:py-24 overflow-hidden bg-[#0f0f0f]">
  {/* Glowing Hue Background */}
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] blur-[120px] opacity-30"></div>
  </div>
  <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#9333ea,_transparent)] blur-[100px] opacity-30 z-0"></div>
  <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#ff00cc,_transparent)] blur-[100px] opacity-30 z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Registration</h2>
<a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!">
    <button className="relative px-10 py-4 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
      animate-[floatGlow_1s_ease-in-out_infinite]
      before:content-[''] before:absolute before:inset-0 before:rounded-full before:blur-[40px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:opacity-80 before:z-[-1]">
      WhatsApp Now
    </button>
    </a>
  </div>

  {/* Custom animation */}
  <style jsx>{`
    @keyframes floatGlow {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-6px) scale(1.03);
      }
    }
  `}</style>
</section>



      <Footer/>

    </div>
  );
}