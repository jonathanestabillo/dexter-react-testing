import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeDefined()
  })

  it('renders a click counter button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toBeDefined()
  })

  it('increments the counter when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    
    // Initial count should be 0
    expect(button).toHaveTextContent('count is 0')
    
    // Click the button
    fireEvent.click(button)
    
    // Count should be 1
    expect(button).toHaveTextContent('count is 1')
  })

  it('renders the React and Vite logos', () => {
    render(<App />)
    const logos = screen.getAllByRole('img')
    expect(logos.length).toBeGreaterThan(0)
  })
})
