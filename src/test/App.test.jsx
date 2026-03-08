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

  it('renders the Click Me To Show Message button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Click Me To Show Message/i })
    expect(button).toBeDefined()
  })

  it('shows welcome message when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Click Me To Show Message/i })
    
    // Message should not be visible initially
    expect(screen.queryByText('WELCOME YOU CLICKED ME!')).toBeNull()
    
    // Click the button
    fireEvent.click(button)
    
    // Message should now be visible
    expect(screen.getByText('WELCOME YOU CLICKED ME!')).toBeDefined()
  })

  it('toggles message visibility when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Click Me To Show Message/i })
    
    // Click to show message
    fireEvent.click(button)
    expect(screen.getByText('WELCOME YOU CLICKED ME!')).toBeDefined()
    
    // Click again to hide message
    fireEvent.click(button)
    expect(screen.queryByText('WELCOME YOU CLICKED ME!')).toBeNull()
  })
})
