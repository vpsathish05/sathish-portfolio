// Import jest-dom matchers
import '@testing-library/jest-dom'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      div: React.forwardRef(({ children, ...props }, ref) => React.createElement('div', { ...props, ref }, children)),
      section: React.forwardRef(({ children, ...props }, ref) => React.createElement('section', { ...props, ref }, children)),
      span: React.forwardRef(({ children, ...props }, ref) => React.createElement('span', { ...props, ref }, children)),
      p: React.forwardRef(({ children, ...props }, ref) => React.createElement('p', { ...props, ref }, children)),
      h1: React.forwardRef(({ children, ...props }, ref) => React.createElement('h1', { ...props, ref }, children)),
      h2: React.forwardRef(({ children, ...props }, ref) => React.createElement('h2', { ...props, ref }, children)),
      h3: React.forwardRef(({ children, ...props }, ref) => React.createElement('h3', { ...props, ref }, children)),
      ul: React.forwardRef(({ children, ...props }, ref) => React.createElement('ul', { ...props, ref }, children)),
      li: React.forwardRef(({ children, ...props }, ref) => React.createElement('li', { ...props, ref }, children)),
    },
    AnimatePresence: ({ children }) => children,
    useAnimation: () => ({
      start: jest.fn(),
      set: jest.fn(),
    }),
    useInView: () => true,
  }
})

// Suppress console errors during tests (optional)
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
