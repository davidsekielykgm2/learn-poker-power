# React Native - Poker Power Project Setup Checklist

## 🎯 0. First steps

- [x] **Version Control**
  - [x] Create Checklist
  - [x] Initialize Git
  - [x] Push repository

## 🏗️ 1. Development Environment

- [x] **Mobile Environment**
  - [x] Install Node.js (version 18.16.0)
  - [x] Install Expo CLI globally
  - [x] Install Emulators (IOS and Android)
  - [x] Install Expo Go app

## 🔧 2. Initial Setup

- [x] **Base Repository and Version Control**
  - [x] Create project with Expo (version 49.0.6)
  - [x] Edit .gitignore (include iOS/Android specific files)
  - [x] Configure TypeScript
  - [x] Configure ESLint and Prettier

## 🔒 3. Authentication Module

- [x] **Navigation Setup**
  - [x] Install react-navigation core and dependencies
  - [x] Configure authentication stack navigator
  - [x] Create navigation structure (auth stack vs app stack)
  - [x] Install and config state management with mobx and mobx-react-lite
  - [x] Set up basic protected routes logic
  - [x] Install mobx-state-tree and refactor logic

- [x] **Login Screen**
  - [x] Install and configure react-native-paper for UI components
  - [x] Create reusable form input components using react-native-paper
  - [x] Enhance MST store with form state management
  - [x] Implement form validation with class-validator
  - [x] Add basic error and loading states

- [x] **API Integration**
  - [x] Set up TanStack Query for data fetching
  - [x] Create mock service architecture
  - [x] Implement login endpoint
  - [x] Basic error handling in mutations

- [ ] **Session Management**
  - [x] Install and configure expo-secure-store
  - [x] Create authentication context provider
  - [x] Implement session persistence logic
  - [ ] Add logout functionality
  - [ ] Handle token refresh flow

- [ ] **User Experience**
  - [ ] Add loading indicators and spinners
  - [ ] Implement error message components
  - [ ] Create smooth transition animations
  - [ ] Add haptic feedback for interactions

- [ ] **Advanced API Integration**
  - [ ] Implement GraphQL infrastructure with Apollo Client
      - [ ] Set up Apollo Client configuration
      - [ ] Create basic GraphQL schema and types
      - [ ] Integrate with MST using mst-gql
  - [ ] Configure Axios for REST endpoints
      - [ ] Set up interceptors for authentication
      - [ ] Create request/response transformers

## 🏛️ 4. Monorepo Architecture Migration

- [x] **NX Workspace Setup**
  - [x] Initialize NX workspace with TypeScript preset
  - [x] Configure NX workspace preferences
  - [x] Set up shared TypeScript configuration
  - [x] Configure workspace-level ESLint and Prettier

- [x] **Project Structure Migration**
  - [x] Create mobile app structure in apps/mobile
  - [x] Move existing React Native code to new structure
  - [x] Update import paths and dependencies
  - [x] Verify mobile app functionality after migration

- [ ] **Shared Libraries Setup**
  - [ ] Create shared-types library
  - [ ] Create shared-utils library
  - [ ] Configure library build and testing
  - [ ] Set up library documentation

## 🖥️ 5. Backend Implementation

- [ ] **NestJS Setup**
  - [ ] Create API project in apps/api
  - [ ] Configure TypeScript and build process
  - [ ] Set up development environment
  - [ ] Configure logging and error handling

- [ ] **Database Integration**
  - [ ] Set up MongoDB connection
  - [ ] Configure TypeGoose for models
  - [ ] Create database schemas
  - [ ] Implement repository pattern

- [ ] **GraphQL Implementation**
  - [ ] Set up NestJS GraphQL module
  - [ ] Define base schema types
  - [ ] Create GraphQL resolvers
  - [ ] Implement data loading and caching

- [ ] **Authentication System**
  - [ ] Implement JWT strategy
  - [ ] Create auth guards and decorators
  - [ ] Set up refresh token rotation
  - [ ] Configure security middleware

## 🔄 6. Frontend-Backend Integration

- [ ] **GraphQL Client Setup**
  - [ ] Install and configure GraphQL codegen
  - [ ] Set up mst-gql integration
  - [ ] Configure Apollo Client
  - [ ] Implement error handling

- [ ] **State Management Enhancement**
  - [ ] Refactor MST stores for GraphQL
  - [ ] Implement optimistic updates
  - [ ] Set up real-time subscriptions
  - [ ] Create store persistence strategy

- [ ] **Type Safety**
  - [ ] Configure type generation pipeline
  - [ ] Set up continuous type generation
  - [ ] Implement runtime type checking
  - [ ] Create type testing utilities
