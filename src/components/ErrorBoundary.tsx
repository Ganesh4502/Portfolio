import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-red-500 p-8 overflow-auto">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full">
                        <h2 className="text-xl font-mono mb-2">{this.state.error?.toString()}</h2>
                        <pre className="font-mono text-sm whitespace-pre-wrap text-gray-400">
                            {this.state.errorInfo?.componentStack}
                        </pre>
                    </div>
                    <button
                        className="mt-8 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
