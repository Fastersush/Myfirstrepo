import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Shield, 
  Network, 
  Settings, 
  Zap, 
  Download,
  ChevronRight,
  CheckCircle
} from 'lucide-react'
import SecurityModulesForm from './forms/SecurityModulesForm'
import NetworkModulesForm from './forms/NetworkModulesForm'
import BasicConfigForm from './forms/BasicConfigForm'
import AdvancedConfigForm from './forms/AdvancedConfigForm'
import BlueprintPreview from './BlueprintPreview'
import { BlueprintConfiguration } from '../types/blueprint'

// Validation schema
const blueprintSchema = z.object({
  modules: z.object({
    security: z.object({
      aws_data: z.object({
        enabled: z.boolean(),
        encryption: z.boolean(),
        encryption_at_rest: z.enum(['enabled', 'disabled']),
        encryption_in_transit: z.enum(['enabled', 'disabled']),
        classification: z.enum(['PII', 'PHI', 'public', 'confidential'])
      }),
      aws_entrypoint: z.object({
        enabled: z.boolean(),
        waf_level: z.enum(['basic', 'advanced', 'enterprise'])
      }),
      aws_org: z.object({
        enabled: z.boolean(),
        account_structure: z.enum(['Single-account', 'Multi-account'])
      }),
      app_logic: z.object({
        enabled: z.boolean(),
        secrets_management: z.enum(['ssm', 'secrets_manager', 'vault'])
      })
    }),
    network: z.object({
      network_topology: z.object({
        enabled: z.boolean(),
        network_topology: z.enum(['single_tier', 'two_tier', 'three_tier'])
      }),
      hybrid_connectivity: z.object({
        enabled: z.boolean(),
        hybrid_connectivity: z.enum(['vpn', 'direct_connect', 'vpn_direct_connect'])
      })
    })
  }),
  basic: z.object({
    infrastructure_style: z.enum(['serverless', 'containerized', 'traditional']),
    application_type: z.enum(['web_app', 'mobile_app', 'api', 'data_processing']),
    cost_profile: z.enum(['cost_optimized', 'cost_sensitive', 'performance_focused']),
    database_required: z.boolean(),
    user_scale: z.enum(['small', 'medium', 'large', 'enterprise']),
    cache_enabled: z.boolean()
  }),
  advanced: z.object({
    deployment_pattern: z.enum(['blue_green', 'rolling', 'canary']),
    environment_profile: z.enum(['development', 'staging', 'production']),
    security_level: z.enum(['basic', 'standard', 'high', 'enterprise']),
    ci_cd: z.object({
      enabled: z.boolean(),
      provider: z.enum(['aws_codepipeline', 'github_actions', 'gitlab', 'jenkins'])
    })
  })
})

type FormData = z.infer<typeof blueprintSchema>

const tabs = [
  { id: 'security', label: 'Security Modules', icon: Shield },
  { id: 'network', label: 'Network Modules', icon: Network },
  { id: 'basic', label: 'Basic Configuration', icon: Settings },
  { id: 'advanced', label: 'Advanced Configuration', icon: Zap },
  { id: 'preview', label: 'Preview & Generate', icon: Download }
]

const BlueprintBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('security')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedBlueprint, setGeneratedBlueprint] = useState<any>(null)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(blueprintSchema),
    defaultValues: {
      modules: {
        security: {
          aws_data: {
            enabled: false,
            encryption: true,
            encryption_at_rest: 'enabled',
            encryption_in_transit: 'enabled',
            classification: 'PII'
          },
          aws_entrypoint: {
            enabled: true,
            waf_level: 'advanced'
          },
          aws_org: {
            enabled: true,
            account_structure: 'Multi-account'
          },
          app_logic: {
            enabled: false,
            secrets_management: 'ssm'
          }
        },
        network: {
          network_topology: {
            enabled: false,
            network_topology: 'three_tier'
          },
          hybrid_connectivity: {
            enabled: false,
            hybrid_connectivity: 'vpn_direct_connect'
          }
        }
      },
      basic: {
        infrastructure_style: 'serverless',
        application_type: 'mobile_app',
        cost_profile: 'cost_sensitive',
        database_required: true,
        user_scale: 'medium',
        cache_enabled: false
      },
      advanced: {
        deployment_pattern: 'blue_green',
        environment_profile: 'production',
        security_level: 'high',
        ci_cd: {
          enabled: true,
          provider: 'gitlab'
        }
      }
    },
    mode: 'onChange'
  })

  const formData = watch()

  const onSubmit = async (data: FormData) => {
    setIsGenerating(true)
    try {
      // Try to call the actual API first
      try {
        const response = await fetch(process.env.REACT_APP_API_ENDPOINT + '/blueprint/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        
        if (response.ok) {
          const result = await response.json()
          setGeneratedBlueprint(result)
          setActiveTab('preview')
          setIsGenerating(false)
          return
        }
      } catch (apiError) {
        console.warn('API call failed, using mock data:', apiError)
      }
      
      // Fallback to mock response if API is not available
      const mockResponse = {
        id: `blueprint-${Date.now()}`,
        configuration: data,
        generated_at: new Date().toISOString(),
        architecture_diagram: 'https://via.placeholder.com/800x600?text=Architecture+Diagram',
        resources: [
          {
            service: 'AWS Lambda',
            description: 'Serverless compute service for application logic',
            configuration: { runtime: 'python3.9', memory: '128MB' }
          },
          {
            service: 'Amazon API Gateway',
            description: 'RESTful API endpoint for frontend communication',
            configuration: { stage: 'prod', throttling: '10000 rps' }
          },
          {
            service: 'Amazon DynamoDB',
            description: 'NoSQL database for application data',
            configuration: { billing_mode: 'on-demand', encryption: 'enabled' }
          }
        ]
      }
      
      setTimeout(() => {
        setGeneratedBlueprint(mockResponse)
        setActiveTab('preview')
        setIsGenerating(false)
      }, 2000)
    } catch (error) {
      console.error('Error generating blueprint:', error)
      setIsGenerating(false)
    }
  }

  const getTabStatus = (tabId: string) => {
    if (tabId === 'preview') return 'default'
    if (tabId === activeTab) return 'active'
    
    // Check if the tab has been completed (no errors in that section)
    const tabErrors = Object.keys(errors).filter(key => key.startsWith(tabId))
    return tabErrors.length === 0 ? 'completed' : 'default'
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'security':
        return <SecurityModulesForm control={control} errors={errors} />
      case 'network':
        return <NetworkModulesForm control={control} errors={errors} />
      case 'basic':
        return <BasicConfigForm control={control} errors={errors} />
      case 'advanced':
        return <AdvancedConfigForm control={control} errors={errors} />
      case 'preview':
        return (
          <BlueprintPreview 
            configuration={formData}
            generatedBlueprint={generatedBlueprint}
            onGenerate={handleSubmit(onSubmit)}
            isGenerating={isGenerating}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Cloud Blueprint Builder
        </h1>
        <p className="text-gray-600">
          Configure your cloud architecture step by step. Complete each section to generate your blueprint.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Configuration Steps
            </h2>
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                const status = getTabStatus(tab.id)
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      status === 'active'
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : status === 'completed'
                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="flex-1 text-sm font-medium">
                      {tab.label}
                    </span>
                    {status === 'completed' && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    {status === 'active' && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="card">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueprintBuilder