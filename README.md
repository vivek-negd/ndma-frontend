# Core Admin

A React + TypeScript + Vite project with Ant Design, fully containerized with Docker.

## 📁 Project Structure

```
src/
├── app/                      # App bootstrap & routing
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   ├── routes.tsx           # Route definitions
│   ├── providers.tsx        # Context providers
│   └── index.ts
│
├── assets/                   # Static assets
│   ├── images/
│   ├── icons/
│   ├── styles/
│   │   ├── global.css      # Global styles
│   │   └── antd-theme.ts   # Ant Design theme config
│   └── index.ts
│
├── components/               # Reusable components
│   ├── common/              # Common UI components
│   │   ├── Button.tsx
│   │   ├── Loader.tsx
│   │   ├── Modal.tsx
│   │   └── index.ts
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── dashboard1.tsx
│   │   └── dashboard2.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── index.ts
│
├── pages/                    # Feature/Route modules
│   ├── auth/                # Authentication pages
│   │   ├── Auth.tsx
│   │   └── index.ts
│   ├── dashboard/           # Dashboard pages
│   │   ├── Dashboard.tsx
│   │   └── index.ts
│   ├── users/               # User management pages
│   │   ├── Users.tsx
│   │   └── index.ts
│   └── index.ts
│
├── server/                   # API & HTTP clients
│   ├── endpoints/           # Internal API endpoints
│   │   ├── common.endpoint.ts
│   │   └── index.ts
│   ├── third-party/         # Third-party integrations
│   │   ├── common.endpoint.ts
│   │   └── index.ts
│   └── index.ts
│
├── hooks/                    # Custom React hooks
│   ├── useAuth.ts           # Authentication hook
│   ├── usePermission.ts     # Permission management
│   └── index.ts
│
├── utils/                    # Utility functions
│   ├── storage.util.ts      # LocalStorage utilities
│   ├── date.util.ts         # Date formatting utilities
│   ├── validation.util.ts   # Validation helpers
│   └── index.ts
│
├── constants/                # App constants
│   └── index.ts
│
├── config/                   # Environment configurations
│   ├── uat.ts               # UAT environment
│   ├── prod.ts              # Production environment
│   └── index.ts
│
├── index.css                 # Root styles
└── vite-env.d.ts            # Vite type definitions
```

## Prerequisites

- Docker Desktop
- VS Code with Dev Containers extension (recommended)

## Getting Started

### Option 1: VS Code Dev Containers (Recommended)

This provides the best development experience with full TypeScript IntelliSense and debugging.

1. Install the **Dev Containers** extension in VS Code
2. Open this project in VS Code
3. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
4. Select **"Dev Containers: Reopen in Container"**
5. Wait for the container to build and VS Code to reload
6. The dev server will start automatically at http://localhost:5173

### Option 2: Docker Compose

For running without VS Code integration:

```bash
# Start development server
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

The application will be available at http://localhost:5173

### Rebuild After Changes

If you modify `package.json`, `Dockerfile`, or `docker-compose.yml`:

```bash
docker-compose down
docker-compose up --build
```

## Working with Docker

### Running Commands Inside Container

```bash
# Execute commands in running container
docker-compose exec app npm run build
docker-compose exec app npm run lint
docker-compose exec app npm install <package-name>

# Access container shell
docker-compose exec app sh
```

### Available NPM Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Installing New Packages

```bash
# Install a new dependency
docker-compose exec app npm install package-name

# Or rebuild container
docker-compose down
docker-compose up --build
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **React Router** - Routing
- **Axios** - HTTP client
- **Dayjs** - Date utilities
- **Docker** - Containerization
- **ESLint** - Code linting

## Key Features

✅ **Modular Architecture** - Well-organized folder structure
✅ **Type-Safe** - Full TypeScript support
✅ **Component Library** - Ant Design integration
✅ **Routing** - React Router with route configuration
✅ **State Management** - Custom hooks for auth and permissions
✅ **API Layer** - Axios with interceptors
✅ **Utilities** - Date, storage, and validation helpers
✅ **Environment Config** - UAT and Production configurations
✅ **Docker Ready** - Fully containerized development environment

## Development

The project uses hot module replacement (HMR) for instant updates during development. Edit files in the `src` directory and see changes reflected immediately in your browser.

### Current Status

✅ Docker container is running
✅ Development server available at http://localhost:5173
✅ Hot reload enabled
✅ Ant Design components integrated
✅ Modular project structure implemented

## Docker Configuration

- **Port**: 5173 (Vite dev server)
- **Volumes**:
  - Project directory mounted for live code updates
  - `node_modules` isolated in container for performance
- **Hot Reload**: Enabled with file watching
- **Environment**: Development mode with TypeScript support

## Troubleshooting

### TypeScript Errors in VS Code

If you see TypeScript errors:

1. Use **Dev Containers** (Option 1 above) - this runs VS Code inside Docker
2. Or install Node.js locally: `brew install node && npm install`

### Port Already in Use

```bash
docker-compose down
# Or kill the process using port 5173
lsof -ti:5173 | xargs kill -9
```

### Container Won't Start

```bash
# Remove all containers and rebuild
docker-compose down -v
docker-compose up --build
```

### Changes Not Reflecting

```bash
# Clear Docker cache and rebuild
docker-compose down
docker system prune -f
docker-compose up --build
```
