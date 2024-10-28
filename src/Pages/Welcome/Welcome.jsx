import oneapp from '../../assets/oneapp.png'
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center items-center p-4">
      {/* Main container with glass effect */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex flex-col items-center gap-8">
          {/* Logo container with animation */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
            <img 
              src={oneapp}
              alt="One App"
              className="w-24 h-24 object-contain relative z-10 rounded-2xl"
            />
          </div>

          {/* Title section */}
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome to One App
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Experience seamless product development with our innovative platform
            </p>
          </div>

          {/* Buttons grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
            <Link 
              to="/sign" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium
                         hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>

            <Link 
              to="/signup" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium
                         hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>

            <Link 
              to="/dashboard" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium
                         hover:bg-gray-200 transform hover:-translate-y-0.5 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;