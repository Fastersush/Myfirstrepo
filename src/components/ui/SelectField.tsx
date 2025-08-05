import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  control: Control<any>
  name: string
  label: string
  description?: string
  options: SelectOption[]
}

const SelectField: React.FC<SelectFieldProps> = ({ 
  control, 
  name, 
  label, 
  description,
  options 
}) => {
  return (
    <div>
      <label className="form-label">
        {label}
      </label>
      {description && (
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <div className="relative">
            <select
              value={value}
              onChange={onChange}
              className="form-input appearance-none pr-10"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default SelectField