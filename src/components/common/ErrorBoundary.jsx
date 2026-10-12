import { Component } from 'react';

/**
 * Keeps a single failing section from blanking the whole page. In development
 * the error is rendered inline so it is visible without opening devtools; in
 * production the section is simply skipped.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Section failed to render:', error, info?.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    if (!import.meta.env.DEV) return null;

    return (
      <pre
        data-testid="render-error"
        style={{
          margin: 0,
          padding: '24px',
          background: '#2b0b0b',
          color: '#ffb4b4',
          fontSize: 13,
          whiteSpace: 'pre-wrap',
        }}
      >
        {`[${this.props.name || 'section'}] ${error.message}\n\n${error.stack || ''}`}
      </pre>
    );
  }
}
