import { BlueprintConfiguration, BlueprintResponse } from '../types/blueprint'

const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT || 'YOUR_API_GATEWAY_ENDPOINT'

class ApiService {
  private async makeRequest<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  async generateBlueprint(
    configuration: BlueprintConfiguration
  ): Promise<BlueprintResponse> {
    return this.makeRequest<BlueprintResponse>('/blueprint/generate', {
      method: 'POST',
      body: JSON.stringify(configuration),
    })
  }

  async getBlueprintById(id: string): Promise<BlueprintResponse> {
    return this.makeRequest<BlueprintResponse>(`/blueprint/${id}`)
  }

  async listUserBlueprints(): Promise<BlueprintResponse[]> {
    return this.makeRequest<BlueprintResponse[]>('/blueprint/list')
  }

  async validateConfiguration(
    configuration: BlueprintConfiguration
  ): Promise<{ valid: boolean; errors?: string[] }> {
    return this.makeRequest('/blueprint/validate', {
      method: 'POST',
      body: JSON.stringify(configuration),
    })
  }

  async getEstimatedCost(
    configuration: BlueprintConfiguration
  ): Promise<{ monthly_cost: number; breakdown: Record<string, number> }> {
    return this.makeRequest('/blueprint/cost-estimate', {
      method: 'POST',
      body: JSON.stringify(configuration),
    })
  }
}

export const apiService = new ApiService()
export default apiService