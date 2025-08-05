import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'
import { Zap, GitBranch, Shield, Settings } from 'lucide-react'
import ToggleField from '../ui/ToggleField'
import SelectField from '../ui/SelectField'

interface AdvancedConfigFormProps {
  control: Control<any>
  errors: FieldErrors<any>
}

const AdvancedConfigForm: React.FC<AdvancedConfigFormProps> = ({ control, errors }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Configuration</h2>
        <p className="text-gray-600">
          Configure advanced deployment patterns, CI/CD pipelines, and enterprise-level security settings 
          for production-ready cloud infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Deployment Pattern */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Deployment Pattern</h3>
              <p className="text-sm text-gray-600">Choose your deployment strategy</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="advanced.deployment_pattern"
            label="Deployment Strategy"
            description="Select the deployment pattern for your application"
            options={[
              { value: 'blue_green', label: 'Blue-Green - Zero downtime deployments' },
              { value: 'rolling', label: 'Rolling - Gradual replacement of instances' },
              { value: 'canary', label: 'Canary - Test with subset of traffic' }
            ]}
          />
        </div>

        {/* Environment Profile */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-50 p-2 rounded-lg">
              <Settings className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Environment Profile</h3>
              <p className="text-sm text-gray-600">What environment are you configuring?</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="advanced.environment_profile"
            label="Target Environment"
            description="Choose the environment this blueprint is designed for"
            options={[
              { value: 'development', label: 'Development - Cost-optimized for testing' },
              { value: 'staging', label: 'Staging - Production-like for final testing' },
              { value: 'production', label: 'Production - High availability and performance' }
            ]}
          />
        </div>

        {/* Security Level */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-red-50 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Security Level</h3>
              <p className="text-sm text-gray-600">Choose your security requirements</p>
            </div>
          </div>

          <SelectField
            control={control}
            name="advanced.security_level"
            label="Security Configuration"
            description="Select the level of security controls to implement"
            options={[
              { value: 'basic', label: 'Basic - Essential security controls' },
              { value: 'standard', label: 'Standard - Industry standard security' },
              { value: 'high', label: 'High - Enhanced security measures' },
              { value: 'enterprise', label: 'Enterprise - Maximum security controls' }
            ]}
          />
        </div>
      </div>

      {/* CI/CD Configuration */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-purple-50 p-2 rounded-lg">
            <GitBranch className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">CI/CD Pipeline</h3>
            <p className="text-sm text-gray-600">Configure continuous integration and deployment</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="advanced.ci_cd.enabled"
            label="Enable CI/CD Pipeline"
            description="Set up automated build, test, and deployment pipeline"
          />

          <SelectField
            control={control}
            name="advanced.ci_cd.provider"
            label="CI/CD Provider"
            description="Choose your preferred CI/CD platform"
            options={[
              { value: 'aws_codepipeline', label: 'AWS CodePipeline - Native AWS solution' },
              { value: 'github_actions', label: 'GitHub Actions - GitHub integrated' },
              { value: 'gitlab', label: 'GitLab CI/CD - GitLab integrated' },
              { value: 'jenkins', label: 'Jenkins - Self-hosted solution' }
            ]}
          />
        </div>
      </div>

      {/* Configuration Guidelines */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-amber-900 mb-3">Advanced Configuration Guidelines</h4>
        <div className="space-y-3 text-sm text-amber-800">
          <div>
            <strong>Deployment Patterns:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li><strong>Blue-Green:</strong> Ideal for critical applications requiring zero downtime</li>
              <li><strong>Rolling:</strong> Good balance between safety and resource efficiency</li>
              <li><strong>Canary:</strong> Best for testing new features with real users</li>
            </ul>
          </div>
          <div>
            <strong>Security Levels:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li><strong>Basic:</strong> Suitable for internal tools and development environments</li>
              <li><strong>Standard:</strong> Appropriate for most business applications</li>
              <li><strong>High:</strong> Required for sensitive data and financial applications</li>
              <li><strong>Enterprise:</strong> Necessary for regulated industries and critical systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedConfigForm