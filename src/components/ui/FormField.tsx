import React from 'react'
import { Controller, Control } from 'react-hook-form'

interface FormFieldProps {
  control: Control<any>
  name: string
  label: string
  description?: string
  type?: 'text' | 'email' | 'number' | 'password'
  placeholder?: string
}

const FormField: React.FC<FormFieldProps> = ({ 
  control, 
  name, 
  label, 
  description,
  type = 'text',
  placeholder 
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
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-input"
          />
        )}
      />
    </div>
  )
}

export default FormField