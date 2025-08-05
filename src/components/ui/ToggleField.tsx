import React from 'react'
import { Controller, Control } from 'react-hook-form'

interface ToggleFieldProps {
  control: Control<any>
  name: string
  label: string
  description?: string
}

const ToggleField: React.FC<ToggleFieldProps> = ({ control, name, label, description }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div className="flex items-start space-x-3">
          <div className="flex items-center h-5">
            <button
              type="button"
              onClick={() => onChange(!value)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                value ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  value ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="min-w-0 flex-1">
            <label className="text-sm font-medium text-gray-900">
              {label}
            </label>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        </div>
      )}
    />
  )
}

export default ToggleField