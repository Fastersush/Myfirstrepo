import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'
import { Network, Wifi } from 'lucide-react'
import ToggleField from '../ui/ToggleField'
import SelectField from '../ui/SelectField'

interface NetworkModulesFormProps {
  control: Control<any>
  errors: FieldErrors<any>
}

const NetworkModulesForm: React.FC<NetworkModulesFormProps> = ({ control, errors }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Network Modules</h2>
        <p className="text-gray-600">
          Configure your network architecture including topology and hybrid connectivity options.
        </p>
      </div>

      {/* Network Topology */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Network className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Network Topology</h3>
            <p className="text-sm text-gray-600">Configure your network architecture pattern</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.network.network_topology.enabled"
            label="Enable Custom Network Topology"
            description="Configure specific network architecture patterns"
          />

          <SelectField
            control={control}
            name="modules.network.network_topology.network_topology"
            label="Network Topology Type"
            description="Choose the network architecture that best fits your application"
            options={[
              { value: 'single_tier', label: 'Single Tier - All components in one layer' },
              { value: 'two_tier', label: 'Two Tier - Presentation and data layers' },
              { value: 'three_tier', label: 'Three Tier - Presentation, application, and data layers' }
            ]}
          />
        </div>
      </div>

      {/* Hybrid Connectivity */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-50 p-2 rounded-lg">
            <Wifi className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Hybrid Connectivity</h3>
            <p className="text-sm text-gray-600">Configure connections to on-premises infrastructure</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.network.hybrid_connectivity.enabled"
            label="Enable Hybrid Connectivity"
            description="Connect your cloud infrastructure to on-premises systems"
          />

          <SelectField
            control={control}
            name="modules.network.hybrid_connectivity.hybrid_connectivity"
            label="Connectivity Type"
            description="Choose how to connect your cloud and on-premises infrastructure"
            options={[
              { value: 'vpn', label: 'VPN - Site-to-site VPN connection' },
              { value: 'direct_connect', label: 'Direct Connect - Dedicated network connection' },
              { value: 'vpn_direct_connect', label: 'VPN + Direct Connect - Hybrid approach with redundancy' }
            ]}
          />
        </div>
      </div>

      {/* Network Best Practices Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-900 mb-3">Network Architecture Guidelines</h4>
        <div className="space-y-2 text-sm text-blue-800">
          <p><strong>Single Tier:</strong> Best for simple applications with minimal traffic and no sensitive data separation requirements.</p>
          <p><strong>Two Tier:</strong> Suitable for web applications that need to separate frontend and backend services.</p>
          <p><strong>Three Tier:</strong> Recommended for production applications requiring scalability, security, and proper separation of concerns.</p>
        </div>
      </div>
    </div>
  )
}

export default NetworkModulesForm