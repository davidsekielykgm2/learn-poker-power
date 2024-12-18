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

## 🔌 2.5. Core Dependencies Setup

- [ ] **Navigation Layer**
  - [ ] Install @react-navigation/native
  - [ ] Install @react-navigation/native-stack
  - [ ] Install @react-navigation/bottom-tabs
  - [ ] Install required navigation dependencies (screens, safe-area)

- [ ] **State Management**
  - [ ] Install MobX dependencies
  - [ ] Configure MobX stores structure
  - [ ] Set up basic store

- [ ] **Expo Additional Modules**
  - [ ] Install expo-font
  - [ ] Install expo-splash-screen
  - [ ] Install expo-linear-gradient
  - [ ] Install other required Expo modules

## 🎨 3. UI/UX Setup

- [ ] **Forms and Validation**
  - [ ] Install and configure react-hook-form
  - [ ] Set up form validation with Zod
  - [ ] Create base form components

## 📱 4. First pages

- [ ] **Screens**
  - [ ] Create Login screen
  - [ ] Create Register screen
  - [ ] Create Home screen

## 🔒 5. Authentication Module

- [ ] **Navigation**
  - [ ] Create auth navigator
  - [ ] Set up protected routes
  - [ ] Configure deep linking

## 🧪 6. Mock Setup

- [ ] **Hardcode data**
  - [ ] Create jsons for each scenario

## 🔄 6. API Integration

- [ ] **Core Configuration**
  - [ ] Configure GraphQL client
  - [ ] Set up environment variables
  - [ ] Set up MobX State Tree stores

- [ ] **GraphQL Setup**
  - [ ] Configure Apollo Client
  - [ ] Set up error handling
  - [ ] Create base queries/mutations
  - [ ] Implement caching strategy

- [ ] **Service Layer**
  - [ ] Create API service structure
  - [ ] Implement interceptors
  - [ ] Set up retry logic
  - [ ] Configure timeout handling

- [ ] **State Management**
  - [ ] Create auth store with MobX
  - [ ] Set up GraphQL mutations/queries
  - [ ] Implement token management
  - [ ] Configure persistent storage
