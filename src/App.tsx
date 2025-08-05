import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Authenticator } from '@aws-amplify/ui-react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import Dashboard from './components/Dashboard'
import BlueprintBuilder from './components/BlueprintBuilder'
import Header from './components/Header'

function AuthenticatedApp() {
  const { user, signOut } = useAuthenticator()

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} signOut={signOut} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/builder" element={<BlueprintBuilder />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function App() {
  return (
    <Authenticator
      variation="modal"
      formFields={{
        signIn: {
          username: {
            placeholder: 'Enter your email',
            isRequired: true,
            label: 'Email',
          },
        },
        signUp: {
          username: {
            placeholder: 'Enter your email',
            isRequired: true,
            label: 'Email',
          },
          email: {
            placeholder: 'Enter your email',
            isRequired: true,
            label: 'Email',
          },
          given_name: {
            placeholder: 'Enter your first name',
            isRequired: true,
            label: 'First Name',
          },
          family_name: {
            placeholder: 'Enter your last name',
            isRequired: true,
            label: 'Last Name',
          },
        },
      }}
      signUpAttributes={['email', 'given_name', 'family_name']}
    >
      {({ signOut, user }) => user ? <AuthenticatedApp /> : null}
    </Authenticator>
  )
}

export default App