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

- [ ] **Navigation Setup**
  - [ ] Install react-navigation core and dependencies
  - [ ] Configure authentication stack navigator
  - [ ] Create navigation structure (auth stack vs app stack)
  - [ ] Set up protected routes logic

- [ ] **Login Screen**
  - [ ] Install form management with react-hook-form
  - [ ] Create reusable form input components
  - [ ] Implement form validation with Zod
  - [ ] Add validation rules for email and password
  - [ ] Handle form submission state

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
