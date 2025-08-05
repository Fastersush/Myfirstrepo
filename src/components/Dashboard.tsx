import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PlusCircle, 
  FileText, 
  Shield, 
  Network, 
  Database,
  Cloud,
  Zap,
  Target
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Shield,
      title: 'Security Modules',
      description: 'Configure AWS security features including data encryption, WAF, and organization structure',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Network,
      title: 'Network Architecture',
      description: 'Design network topology and hybrid connectivity options',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Database,
      title: 'Infrastructure Style',
      description: 'Choose between serverless, containerized, or traditional infrastructure',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Zap,
      title: 'CI/CD Integration',
      description: 'Configure deployment patterns and continuous integration',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="text-center">
          <Cloud className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Cloud Blueprint Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Design and generate cloud architecture blueprints for AWS. Perfect for cloud beginners, 
            enthusiasts, and digital transformation teams looking to understand base cloud architecture.
          </p>
        </div>
      </div>

      {/* Quick Action */}
      <div className="mb-12">
        <div className="card text-center">
          <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Start Building Your Blueprint
          </h2>
          <p className="text-gray-600 mb-6">
            Configure your cloud architecture by selecting from security, network, 
            and infrastructure modules tailored to your needs.
          </p>
          <button
            onClick={() => navigate('/builder')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Create New Blueprint</span>
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div key={index} className="card hover:shadow-md transition-shadow">
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                <IconComponent className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Benefits Section */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Use Cloud Blueprint Generator?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary-50 inline-flex p-3 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600 text-sm">
              No cloud expertise required. Our intuitive interface guides you through the process.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-50 inline-flex p-3 rounded-lg mb-4">
              <Shield className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
            <p className="text-gray-600 text-sm">
              Built-in security and architectural best practices based on AWS Well-Architected Framework.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-50 inline-flex p-3 rounded-lg mb-4">
              <Target className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Customizable</h3>
            <p className="text-gray-600 text-sm">
              Tailor your blueprint to match your specific requirements and use case.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard