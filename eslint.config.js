// Importing necessary components for ESLint configuration
import js from '@eslint/js'; // Base configuration for JavaScript
import globals from 'globals'; // Global variables for different environments
import react from 'eslint-plugin-react'; // React plugin for linting React code
import reactHooks from 'eslint-plugin-react-hooks'; // React Hooks plugin for linting React hooks
import reactRefresh from 'eslint-plugin-react-refresh'; // React Refresh plugin for handling React Fast Refresh

export default [
  // Configuration to ignore specific files or directories
  {
    ignores: ['dist'], // Ignore the 'dist' directory
  },
  // Configuration for JavaScript and JSX files
  {
    files: ['**/*.{js,jsx}'], // Apply this configuration to all JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Set ECMAScript version to 2020
      globals: globals.browser, // Use browser global variables (e.g., window, document)
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX syntax support
        sourceType: 'module', // Set the source type to module for ES modules
      },
    },
    settings: {
      react: {
        version: '18.3', // Specify React version for linting
      },
    },
    plugins: {
      react, // Add the React plugin
      'react-hooks': reactHooks, // Add the React Hooks plugin
      'react-refresh': reactRefresh, // Add the React Refresh plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Apply recommended rules from ESLint for JavaScript
      ...react.configs.recommended.rules, // Apply recommended rules from ESLint React plugin
      ...react.configs['jsx-runtime'].rules, // Apply rules specific to the JSX runtime
      ...reactHooks.configs.recommended.rules, // Apply recommended rules from ESLint React Hooks plugin
      'react/jsx-no-target-blank': 'off', // Disable rule that prevents unsafe target="_blank" links
      'react-refresh/only-export-components': [
        'warn', // Warn when not all components are exported
        { allowConstantExport: true }, // Allow constant exports without a warning
      ],
    },
  },
];
