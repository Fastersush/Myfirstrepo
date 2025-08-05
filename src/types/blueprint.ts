export interface SecurityModules {
  aws_data: {
    enabled: boolean
    encryption: boolean
    encryption_at_rest: 'enabled' | 'disabled'
    encryption_in_transit: 'enabled' | 'disabled'
    classification: 'PII' | 'PHI' | 'public' | 'confidential'
  }
  aws_entrypoint: {
    enabled: boolean
    waf_level: 'basic' | 'advanced' | 'enterprise'
  }
  aws_org: {
    enabled: boolean
    account_structure: 'Single-account' | 'Multi-account'
  }
  app_logic: {
    enabled: boolean
    secrets_management: 'ssm' | 'secrets_manager' | 'vault'
  }
}

export interface NetworkModules {
  network_topology: {
    enabled: boolean
    network_topology: 'single_tier' | 'two_tier' | 'three_tier'
  }
  hybrid_connectivity: {
    enabled: boolean
    hybrid_connectivity: 'vpn' | 'direct_connect' | 'vpn_direct_connect'
  }
}

export interface BasicConfiguration {
  infrastructure_style: 'serverless' | 'containerized' | 'traditional'
  application_type: 'web_app' | 'mobile_app' | 'api' | 'data_processing'
  cost_profile: 'cost_optimized' | 'cost_sensitive' | 'performance_focused'
  database_required: boolean
  user_scale: 'small' | 'medium' | 'large' | 'enterprise'
  cache_enabled: boolean
}

export interface AdvancedConfiguration {
  deployment_pattern: 'blue_green' | 'rolling' | 'canary'
  environment_profile: 'development' | 'staging' | 'production'
  security_level: 'basic' | 'standard' | 'high' | 'enterprise'
  ci_cd: {
    enabled: boolean
    provider: 'aws_codepipeline' | 'github_actions' | 'gitlab' | 'jenkins'
  }
}

export interface BlueprintConfiguration {
  modules: {
    security: SecurityModules
    network: NetworkModules
  }
  basic: BasicConfiguration
  advanced: AdvancedConfiguration
}

export interface BlueprintResponse {
  id: string
  configuration: BlueprintConfiguration
  generated_at: string
  architecture_diagram: string
  resources: Array<{
    service: string
    description: string
    configuration: Record<string, any>
  }>
}