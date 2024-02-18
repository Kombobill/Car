// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error);
    console.error('Error info:', info);
    // You can log the error to your analytics service here
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      return this.props.fallback || <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
