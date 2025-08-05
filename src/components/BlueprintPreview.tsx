import React from 'react'
import { Download, Loader, CheckCircle, ExternalLink } from 'lucide-react'

interface BlueprintPreviewProps {
  configuration: any
  generatedBlueprint: any
  onGenerate: () => void
  isGenerating: boolean
}

const BlueprintPreview: React.FC<BlueprintPreviewProps> = ({
  configuration,
  generatedBlueprint,
  onGenerate,
  isGenerating
}) => {
  const renderConfigurationSummary = () => {
    const { modules, basic, advanced } = configuration

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Configuration Summary</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Security Modules */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Security Modules</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Data Security:</span>
                <span className={modules.security.aws_data.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.security.aws_data.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Entry Point Security:</span>
                <span className={modules.security.aws_entrypoint.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.security.aws_entrypoint.enabled ? `Enabled (${modules.security.aws_entrypoint.waf_level})` : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Organization:</span>
                <span className={modules.security.aws_org.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.security.aws_org.enabled ? modules.security.aws_org.account_structure : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Application Security:</span>
                <span className={modules.security.app_logic.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.security.app_logic.enabled ? modules.security.app_logic.secrets_management.toUpperCase() : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          {/* Network Modules */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Network Modules</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Network Topology:</span>
                <span className={modules.network.network_topology.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.network.network_topology.enabled ? modules.network.network_topology.network_topology.replace('_', ' ') : 'Default'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hybrid Connectivity:</span>
                <span className={modules.network.hybrid_connectivity.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {modules.network.hybrid_connectivity.enabled ? modules.network.hybrid_connectivity.hybrid_connectivity.replace('_', ' ') : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          {/* Basic Configuration */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Basic Configuration</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Infrastructure:</span>
                <span className="text-blue-600 capitalize">{basic.infrastructure_style}</span>
              </div>
              <div className="flex justify-between">
                <span>Application Type:</span>
                <span className="text-blue-600">{basic.application_type.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span>Cost Profile:</span>
                <span className="text-blue-600">{basic.cost_profile.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span>User Scale:</span>
                <span className="text-blue-600 capitalize">{basic.user_scale}</span>
              </div>
              <div className="flex justify-between">
                <span>Database:</span>
                <span className={basic.database_required ? 'text-green-600' : 'text-gray-500'}>
                  {basic.database_required ? 'Required' : 'Not needed'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Caching:</span>
                <span className={basic.cache_enabled ? 'text-green-600' : 'text-gray-500'}>
                  {basic.cache_enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          {/* Advanced Configuration */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Advanced Configuration</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Deployment:</span>
                <span className="text-purple-600">{advanced.deployment_pattern.replace('_', '-')}</span>
              </div>
              <div className="flex justify-between">
                <span>Environment:</span>
                <span className="text-purple-600 capitalize">{advanced.environment_profile}</span>
              </div>
              <div className="flex justify-between">
                <span>Security Level:</span>
                <span className="text-purple-600 capitalize">{advanced.security_level}</span>
              </div>
              <div className="flex justify-between">
                <span>CI/CD:</span>
                <span className={advanced.ci_cd.enabled ? 'text-green-600' : 'text-gray-500'}>
                  {advanced.ci_cd.enabled ? advanced.ci_cd.provider.replace('_', ' ') : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderGeneratedBlueprint = () => {
    if (!generatedBlueprint) return null

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-900">Generated Blueprint</h3>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            <strong>Blueprint ID:</strong> {generatedBlueprint.id}
          </p>
          <p className="text-green-800">
            <strong>Generated:</strong> {new Date(generatedBlueprint.generated_at).toLocaleString()}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Architecture Diagram</h4>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <img 
              src={generatedBlueprint.architecture_diagram} 
              alt="Architecture Diagram"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>

        {/* Resources */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">AWS Resources</h4>
          <div className="space-y-4">
            {generatedBlueprint.resources.map((resource: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-medium text-gray-900">{resource.service}</h5>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <div className="mt-3">
                  <h6 className="text-xs font-medium text-gray-700 mb-2">Configuration:</h6>
                  <div className="text-xs text-gray-600 space-y-1">
                    {Object.entries(resource.configuration).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span>{key.replace(/_/g, ' ')}:</span>
                        <span className="font-mono">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Actions */}
        <div className="flex space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Blueprint</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <ExternalLink className="h-4 w-4" />
            <span>View in AWS Console</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview & Generate</h2>
        <p className="text-gray-600">
          Review your configuration and generate your cloud architecture blueprint.
        </p>
      </div>

      {renderConfigurationSummary()}

      {!generatedBlueprint && (
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to Generate Your Blueprint?
            </h3>
            <p className="text-gray-600 mb-6">
              Click the button below to generate your cloud architecture blueprint based on your configuration.
            </p>
            <button
              onClick={onGenerate}
              disabled={isGenerating}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              {isGenerating ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Generating Blueprint...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Generate Blueprint</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {generatedBlueprint && renderGeneratedBlueprint()}
    </div>
  )
}

export default BlueprintPreview