"use client";
import {useEffect, useState} from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  show: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, show, onClose, duration = 5000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [show, duration, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`max-w-sm w-full rounded-lg shadow-lg p-4 border ${
        type === 'success'
          ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400'
          : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">
              {type === 'success' ? '✅' : '❌'}
            </span>
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="ml-4 text-lg hover:opacity-70 transition-opacity"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
