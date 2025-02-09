interface Window {
  gtag: (
    command: 'event',
    eventName: string,
    eventParameters?: Record<string, any>
  ) => void;
} 