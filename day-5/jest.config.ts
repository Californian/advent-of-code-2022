import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  rootDir: "./",

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
  testEnvironment: 'node',

  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', {
      useESM: true,
      tsConfigFile: "tsconfig.json",
      enableTsDiagnostics: true
    }],
  },

  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.mts',
    '!src/**/*.d.ts',
    '!src/**/*.d.mts',
  ],

  moduleFileExtensions: ["js", "ts"],

  roots: ['<rootDir>'],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
}

export default jestConfig
