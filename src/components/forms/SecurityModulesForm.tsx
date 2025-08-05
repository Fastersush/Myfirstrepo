import React from 'react'
import { Controller, Control, FieldErrors } from 'react-hook-form'
import { Shield, Database, Globe, Key } from 'lucide-react'
import FormField from '../ui/FormField'
import ToggleField from '../ui/ToggleField'
import SelectField from '../ui/SelectField'

interface SecurityModulesFormProps {
  control: Control<any>
  errors: FieldErrors<any>
}

const SecurityModulesForm: React.FC<SecurityModulesFormProps> = ({ control, errors }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Modules</h2>
        <p className="text-gray-600">
          Configure security features for your cloud infrastructure including encryption, 
          web application firewall, and organizational structure.
        </p>
      </div>

      {/* AWS Data Security */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Database className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Data Security</h3>
            <p className="text-sm text-gray-600">Configure data encryption and classification</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.security.aws_data.enabled"
            label="Enable Data Security Module"
            description="Activate comprehensive data protection features"
          />

          <ToggleField
            control={control}
            name="modules.security.aws_data.encryption"
            label="Enable Encryption"
            description="Enable encryption for data at rest and in transit"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <SelectField
              control={control}
              name="modules.security.aws_data.encryption_at_rest"
              label="Encryption at Rest"
              options={[
                { value: 'enabled', label: 'Enabled' },
                { value: 'disabled', label: 'Disabled' }
              ]}
            />

            <SelectField
              control={control}
              name="modules.security.aws_data.encryption_in_transit"
              label="Encryption in Transit"
              options={[
                { value: 'enabled', label: 'Enabled' },
                { value: 'disabled', label: 'Disabled' }
              ]}
            />
          </div>

          <SelectField
            control={control}
            name="modules.security.aws_data.classification"
            label="Data Classification"
            options={[
              { value: 'public', label: 'Public' },
              { value: 'confidential', label: 'Confidential' },
              { value: 'PII', label: 'PII (Personally Identifiable Information)' },
              { value: 'PHI', label: 'PHI (Protected Health Information)' }
            ]}
          />
        </div>
      </div>

      {/* AWS Entry Point Security */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-red-50 p-2 rounded-lg">
            <Globe className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Entry Point Security</h3>
            <p className="text-sm text-gray-600">Configure web application firewall and entry point protection</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.security.aws_entrypoint.enabled"
            label="Enable Entry Point Security"
            description="Activate WAF and entry point protection"
          />

          <SelectField
            control={control}
            name="modules.security.aws_entrypoint.waf_level"
            label="WAF Protection Level"
            description="Choose the level of web application firewall protection"
            options={[
              { value: 'basic', label: 'Basic - Essential protection rules' },
              { value: 'advanced', label: 'Advanced - Enhanced threat detection' },
              { value: 'enterprise', label: 'Enterprise - Full protection suite' }
            ]}
          />
        </div>
      </div>

      {/* AWS Organization */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-50 p-2 rounded-lg">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Organization Structure</h3>
            <p className="text-sm text-gray-600">Configure AWS Organizations and account structure</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.security.aws_org.enabled"
            label="Enable AWS Organizations"
            description="Use AWS Organizations for centralized management"
          />

          <SelectField
            control={control}
            name="modules.security.aws_org.account_structure"
            label="Account Structure"
            description="Choose your AWS account organization strategy"
            options={[
              { value: 'Single-account', label: 'Single Account - All resources in one account' },
              { value: 'Multi-account', label: 'Multi-Account - Separate accounts for different environments' }
            ]}
          />
        </div>
      </div>

      {/* Application Logic Security */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-purple-50 p-2 rounded-lg">
            <Key className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Application Logic Security</h3>
            <p className="text-sm text-gray-600">Configure secrets management and application-level security</p>
          </div>
        </div>

        <div className="space-y-4">
          <ToggleField
            control={control}
            name="modules.security.app_logic.enabled"
            label="Enable Application Security"
            description="Activate application-level security features"
          />

          <SelectField
            control={control}
            name="modules.security.app_logic.secrets_management"
            label="Secrets Management"
            description="Choose your secrets management solution"
            options={[
              { value: 'ssm', label: 'AWS Systems Manager Parameter Store' },
              { value: 'secrets_manager', label: 'AWS Secrets Manager' },
              { value: 'vault', label: 'HashiCorp Vault' }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default SecurityModulesForm