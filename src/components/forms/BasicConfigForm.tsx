import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'
import { Settings, Smartphone, DollarSign, Database, Users, Zap } from 'lucide-react'
import ToggleField from '../ui/ToggleField'
import SelectField from '../ui/SelectField'

interface BasicConfigFormProps {
  control: Control<any>
  errors: FieldErrors<any>
}

const BasicConfigForm: React.FC<BasicConfigFormProps> = ({ control, errors }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Configuration</h2>
        <p className="text-gray-600">
          Define the fundamental characteristics of your cloud application including infrastructure style, 
          application type, and scaling requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Infrastructure Style */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-50 p-2 rounded-lg">
              <Settings className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Infrastructure Style</h3>
              <p className="text-sm text-gray-600">Choose your deployment model</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="basic.infrastructure_style"
            label="Infrastructure Type"
            description="Select the infrastructure model that best fits your needs"
            options={[
              { value: 'serverless', label: 'Serverless - Pay per execution, auto-scaling' },
              { value: 'containerized', label: 'Containerized - Docker containers on managed services' },
              { value: 'traditional', label: 'Traditional - Virtual machines and servers' }
            ]}
          />
        </div>

        {/* Application Type */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Smartphone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Application Type</h3>
              <p className="text-sm text-gray-600">What type of application are you building?</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="basic.application_type"
            label="Application Category"
            description="Choose the primary type of your application"
            options={[
              { value: 'web_app', label: 'Web Application - Browser-based application' },
              { value: 'mobile_app', label: 'Mobile Application - iOS/Android backend' },
              { value: 'api', label: 'API Service - RESTful or GraphQL API' },
              { value: 'data_processing', label: 'Data Processing - ETL, analytics, ML' }
            ]}
          />
        </div>

        {/* Cost Profile */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-50 p-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Cost Profile</h3>
              <p className="text-sm text-gray-600">What's your cost optimization priority?</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="basic.cost_profile"
            label="Cost Optimization"
            description="Choose your cost optimization strategy"
            options={[
              { value: 'cost_optimized', label: 'Cost Optimized - Minimize expenses' },
              { value: 'cost_sensitive', label: 'Cost Sensitive - Balance cost and performance' },
              { value: 'performance_focused', label: 'Performance Focused - Optimize for speed' }
            ]}
          />
        </div>

        {/* User Scale */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange-50 p-2 rounded-lg">
              <Users className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">User Scale</h3>
              <p className="text-sm text-gray-600">How many users will your application serve?</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="basic.user_scale"
            label="Expected User Scale"
            description="Estimate your user base size"
            options={[
              { value: 'small', label: 'Small - Up to 1K users' },
              { value: 'medium', label: 'Medium - 1K to 100K users' },
              { value: 'large', label: 'Large - 100K to 1M users' },
              { value: 'enterprise', label: 'Enterprise - 1M+ users' }
            ]}
          />
        </div>
      </div>

      {/* Additional Features */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Features</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-50 p-2 rounded-lg">
                <Database className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Database Required</h4>
                <p className="text-sm text-gray-600">Does your application need persistent data storage?</p>
              </div>
            </div>
            <ToggleField
              control={control}
              name="basic.database_required"
              label="Enable Database"
              description="Include database services in your architecture"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-50 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Caching</h4>
                <p className="text-sm text-gray-600">Improve performance with in-memory caching</p>
              </div>
            </div>
            <ToggleField
              control={control}
              name="basic.cache_enabled"
              label="Enable Caching"
              description="Add caching layer for improved performance"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicConfigForm