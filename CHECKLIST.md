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

- [ ] **Login Screen**
  - [ ] Install and configure react-native-paper for UI components
  - [ ] Create reusable form input components using react-native-paper
  - [ ] Enhance MST store with form state management
  - [ ] Implement form validation with class-validator
  - [ ] Add basic error and loading states

- [ ] **API Integration**
  - [ ] Set up TanStack Query for data fetching
  - [ ] Create mock service architecture
  - [ ] Implement authentication API endpoints
  - [ ] Handle loading, error, and success states
  - [ ] Add request error boundaries

- [ ] **Session Management**
  - [ ] Install and configure expo-secure-store
  - [ ] Create authentication context provider
  - [ ] Implement session persistence logic
  - [ ] Add logout functionality
  - [ ] Handle token refresh flow

- [ ] **User Experience**
  - [ ] Add loading indicators and spinners
  - [ ] Implement error message components
  - [ ] Create smooth transition animations
  - [ ] Add haptic feedback for interactions
