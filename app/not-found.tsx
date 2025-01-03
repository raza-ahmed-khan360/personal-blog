import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900">
      <div className="max-w-[1728px] w-full flex flex-col items-center justify-center gap-3">
        {/* Image Container */}
        <div className="w-full max-w-[778px] relative aspect-[777.55/914.59]">
          <svg
            className="w-full h-full"
            viewBox="0 0 778 915"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Elements */}
            <path
              d="M83.65 0h207.29v405.74H83.65z"
              fill="#566FA6"
              fillOpacity=".1"
            />
            <path
              d="M382.83 800.4l424.83-168.93-273.66-339.9L382.83 800.4z"
              fill="#8093B8"
              fillOpacity=".1"
            />
            
            {/* 404 Text */}
            <text
              x="200"
              y="350"
              className="font-poppins font-bold"
              fill="#566FA6"
              fontSize="100"
            >
              404
            </text>

            {/* Footprints */}
            <g transform="translate(50, 450)">
              <path
                d="M30 0C46.57 0 60 13.43 60 30C60 46.57 46.57 60 30 60C13.43 60 0 46.57 0 30C0 13.43 13.43 0 30 0Z"
                fill="#566FA6"
                fillOpacity="0.2"
              />
              <path
                d="M20 15C25.52 15 30 19.48 30 25C30 30.52 25.52 35 20 35C14.48 35 10 30.52 10 25C10 19.48 14.48 15 20 15Z"
                fill="#566FA6"
                fillOpacity="0.3"
              />
            </g>
            <g transform="translate(150, 550) rotate(-15)">
              <path
                d="M30 0C46.57 0 60 13.43 60 30C60 46.57 46.57 60 30 60C13.43 60 0 46.57 0 30C0 13.43 13.43 0 30 0Z"
                fill="#566FA6"
                fillOpacity="0.2"
              />
              <path
                d="M20 15C25.52 15 30 19.48 30 25C30 30.52 25.52 35 20 35C14.48 35 10 30.52 10 25C10 19.48 14.48 15 20 15Z"
                fill="#566FA6"
                fillOpacity="0.3"
              />
            </g>
            <g transform="translate(250, 650) rotate(-30)">
              <path
                d="M30 0C46.57 0 60 13.43 60 30C60 46.57 46.57 60 30 60C13.43 60 0 46.57 0 30C0 13.43 13.43 0 30 0Z"
                fill="#566FA6"
                fillOpacity="0.2"
              />
              <path
                d="M20 15C25.52 15 30 19.48 30 25C30 30.52 25.52 35 20 35C14.48 35 10 30.52 10 25C10 19.48 14.48 15 20 15Z"
                fill="#566FA6"
                fillOpacity="0.3"
              />
            </g>

            {/* Decorative Elements */}
            <circle cx="600" cy="200" r="80" fill="#566FA6" fillOpacity="0.1" />
            <circle cx="650" cy="250" r="40" fill="#8093B8" fillOpacity="0.1" />
            <path
              d="M100 700L150 750L100 800"
              stroke="#566FA6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.2"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-[#566fa6] text-4xl md:text-6xl lg:text-8xl font-extrabold font-poppins animate-bounce">
            OOPS!
          </h1>
          
          <h2 className="text-[#8093b8] text-2xl md:text-4xl lg:text-5xl font-medium font-poppins">
            Looks like big foot<br/>has broken the link
          </h2>
        </div>

        {/* Button */}
        <Link 
          href="/"
          className="mt-8 px-8 md:px-16 py-3 md:py-4 bg-[#566fa7] hover:bg-[#455a89] transition-all duration-300 rounded-full flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
        >
          <span className="text-white text-xl md:text-3xl font-medium font-poppins">
            Back to homepage
          </span>
        </Link>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#566fa6] opacity-5 rounded-full blur-xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8093b8] opacity-5 rounded-full blur-xl" />
      </div>
    </div>
  );
} 