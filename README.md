# Cloud Blueprint Generator

A modern React.js web application for generating cloud architecture blueprints on AWS. Designed for cloud beginners, enthusiasts, and digital transformation teams to understand and design base cloud architecture.

## Features

### 🔐 Authentication
- AWS Cognito integration for secure user management
- Email-based signup with verification
- Persistent user sessions

### 🏗️ Blueprint Configuration
- **Security Modules**: Configure data encryption, WAF, organization structure, and secrets management
- **Network Modules**: Design network topology and hybrid connectivity
- **Basic Configuration**: Set infrastructure style, application type, cost profile, and scaling requirements
- **Advanced Configuration**: Configure deployment patterns, CI/CD pipelines, and security levels

### 🎨 Modern UI/UX
- Responsive design built with Tailwind CSS
- Intuitive step-by-step configuration wizard
- Real-time form validation with Zod
- Interactive preview and summary screens

### 🚀 Technology Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Authentication**: AWS Amplify with Cognito
- **Icons**: Lucide React
- **State Management**: React hooks

## Prerequisites

- Node.js 18+ and npm/yarn
- AWS Account with Cognito User Pool configured
- AWS API Gateway endpoint (for backend integration)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd cloud-blueprint-generator
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your AWS settings:

```bash
cp .env.example .env.local
```

Update `.env.local` with your AWS configuration:

```env
# AWS Cognito Configuration
REACT_APP_AWS_REGION=us-east-1
REACT_APP_USER_POOL_ID=your_user_pool_id_here
REACT_APP_USER_POOL_CLIENT_ID=your_user_pool_client_id_here

# API Gateway Configuration
REACT_APP_API_ENDPOINT=https://your-api-gateway-id.execute-api.us-east-1.amazonaws.com/prod
```

### 3. AWS Cognito Setup

Create a Cognito User Pool in AWS Console:

1. Go to AWS Cognito in your AWS Console
2. Create a new User Pool
3. Configure sign-in options (email)
4. Set up required attributes: `given_name`, `family_name`, `email`
5. Create an App Client (without client secret for SPA)
6. Note down the User Pool ID and App Client ID

### 4. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── forms/          # Form components for each configuration section
│   │   ├── SecurityModulesForm.tsx
│   │   ├── NetworkModulesForm.tsx
│   │   ├── BasicConfigForm.tsx
│   │   └── AdvancedConfigForm.tsx
│   ├── ui/             # Reusable UI components
│   │   ├── FormField.tsx
│   │   ├── SelectField.tsx
│   │   └── ToggleField.tsx
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Header.tsx      # Navigation header
│   ├── BlueprintBuilder.tsx  # Main configuration wizard
│   └── BlueprintPreview.tsx  # Preview and generation
├── config/             # Configuration files
│   └── aws.ts         # AWS Amplify configuration
├── services/          # API services
│   └── api.ts        # Backend API integration
├── types/            # TypeScript type definitions
│   └── blueprint.ts  # Blueprint-related types
├── utils/           # Utility functions
│   └── cn.ts       # Tailwind class merging utility
├── App.tsx         # Main app component
├── main.tsx       # App entry point
└── index.css      # Global styles
```

## Configuration Options

### Security Modules

- **Data Security**: Configure encryption at rest/transit and data classification
- **Entry Point Security**: Set up WAF protection levels
- **Organization Structure**: Choose single or multi-account setup
- **Application Security**: Configure secrets management solutions

### Network Modules

- **Network Topology**: Single-tier, two-tier, or three-tier architecture
- **Hybrid Connectivity**: VPN, Direct Connect, or hybrid options

### Basic Configuration

- **Infrastructure Style**: Serverless, containerized, or traditional
- **Application Type**: Web app, mobile app, API, or data processing
- **Cost Profile**: Cost-optimized, cost-sensitive, or performance-focused
- **User Scale**: Small (1K), medium (100K), large (1M), or enterprise (1M+)

### Advanced Configuration

- **Deployment Patterns**: Blue-green, rolling, or canary deployments
- **Environment Profile**: Development, staging, or production
- **Security Level**: Basic, standard, high, or enterprise
- **CI/CD Integration**: AWS CodePipeline, GitHub Actions, GitLab, or Jenkins

## API Integration

The app is designed to work with a Python backend hosted on AWS Lambda with API Gateway. The expected endpoints are:

- `POST /blueprint/generate` - Generate a new blueprint
- `GET /blueprint/{id}` - Get blueprint by ID
- `GET /blueprint/list` - List user's blueprints
- `POST /blueprint/validate` - Validate configuration
- `POST /blueprint/cost-estimate` - Get cost estimates

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Adding New Configuration Options

1. Update the TypeScript types in `src/types/blueprint.ts`
2. Add the new form fields to the appropriate form component
3. Update the validation schema in `BlueprintBuilder.tsx`
4. Update the preview component to display the new options

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to AWS S3 + CloudFront

1. Create an S3 bucket for hosting
2. Enable static website hosting
3. Create a CloudFront distribution
4. Upload the built files to S3
5. Configure CloudFront to serve the React app

### Environment Variables for Production

Set the following environment variables in your hosting platform:

```env
REACT_APP_AWS_REGION=your-aws-region
REACT_APP_USER_POOL_ID=your-production-user-pool-id
REACT_APP_USER_POOL_CLIENT_ID=your-production-client-id
REACT_APP_API_ENDPOINT=your-production-api-endpoint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions and support, please open an issue in the GitHub repository.
