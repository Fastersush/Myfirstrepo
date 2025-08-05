import React from 'react'
import { Cloud, LogOut, User } from 'lucide-react'

interface HeaderProps {
  user: any
  signOut: () => void
}

const Header: React.FC<HeaderProps> = ({ user, signOut }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-primary-600" />
            <h1 className="text-xl font-bold text-gray-900">
              Cloud Blueprint Generator
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-700">
                {user?.attributes?.given_name} {user?.attributes?.family_name}
              </span>
            </div>
            
            <button
              onClick={signOut}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header