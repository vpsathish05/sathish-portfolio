/**
 * Utility Function Tests
 */

import { cn } from '../utils'

describe('Utility Functions', () => {
  describe('cn (classname merger)', () => {
    it('should merge class names', () => {
      const result = cn('class1', 'class2')
      expect(result).toContain('class1')
      expect(result).toContain('class2')
    })

    it('should handle conditional classes', () => {
      const isActive = true
      const result = cn('base', isActive && 'active')
      expect(result).toContain('base')
      expect(result).toContain('active')
    })

    it('should handle false conditionals', () => {
      const isActive = false
      const result = cn('base', isActive && 'active')
      expect(result).toContain('base')
      expect(result).not.toContain('active')
    })

    it('should handle undefined values', () => {
      const result = cn('base', undefined, 'other')
      expect(result).toContain('base')
      expect(result).toContain('other')
    })

    it('should merge tailwind classes correctly', () => {
      // Should override conflicting classes
      const result = cn('px-2 py-1', 'px-4')
      expect(result).toContain('px-4')
      expect(result).toContain('py-1')
    })
  })
})
