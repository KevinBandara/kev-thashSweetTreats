'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { getWhatsAppGeneralUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  const { lang } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const waUrl = getWhatsAppGeneralUrl();

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .wa-pulse-ring {
          animation: wa-pulse 2.2s ease-out infinite;
        }
      `}</style>

      <aside aria-label="WhatsApp quick contact">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp — Kev & Thash Sweet Treats"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400 group cursor-pointer"
          style={{
            zIndex: 50,
            backgroundColor: '#25D366',
            padding: hovered ? '14px 20px 14px 16px' : '14px',
            boxShadow: hovered
              ? '0 8px 32px rgba(37,211,102,0.55)'
              : '0 4px 20px rgba(37,211,102,0.4)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        >
          {/* Pulse ring */}
          <span
            className="wa-pulse-ring absolute inset-0 rounded-full"
            style={{ backgroundColor: 'rgba(37,211,102,0.5)' }}
            aria-hidden="true"
          />

          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={28}
            height={28}
            className="w-7 h-7 flex-shrink-0 relative"
            fill="white"
            aria-hidden="true"
          >
            <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.47.644 4.888 1.868 7.02L2 30l7.184-1.832A13.94 13.94 0 0016.002 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.002 2zm0 25.44a11.59 11.59 0 01-5.898-1.608l-.424-.252-4.264 1.088 1.128-4.136-.276-.44A11.598 11.598 0 014.56 16C4.56 9.68 9.682 4.56 16.002 4.56c6.32 0 11.44 5.12 11.44 11.44 0 6.32-5.12 11.44-11.44 11.44zm6.272-8.576c-.344-.172-2.036-1.004-2.352-1.12-.316-.116-.548-.172-.78.172-.232.344-.896 1.12-1.1 1.352-.2.228-.404.256-.748.084-.344-.172-1.452-.536-2.768-1.708-1.024-.912-1.716-2.036-1.916-2.38-.2-.344-.02-.532.148-.704.152-.152.344-.4.516-.6.172-.2.228-.344.344-.572.116-.228.06-.428-.028-.6-.088-.172-.78-1.876-1.068-2.572-.284-.68-.572-.584-.78-.596-.2-.012-.432-.016-.664-.016-.232 0-.608.088-.928.432-.316.344-1.212 1.184-1.212 2.888s1.24 3.352 1.412 3.584c.172.228 2.44 3.732 5.916 5.228.828.36 1.472.572 1.976.732.832.264 1.588.228 2.184.14.668-.1 2.036-.832 2.324-1.636.288-.804.288-1.492.2-1.636-.084-.144-.316-.228-.66-.4z" />
          </svg>

          {/* Tooltip text */}
          <span
            className="whitespace-nowrap font-bold text-white text-xs sm:text-sm relative overflow-hidden transition-all duration-300"
            style={{
              maxWidth: hovered ? '160px' : '0px',
              opacity: hovered ? 1 : 0,
            }}
            aria-hidden={!hovered}
          >
            {lang === 'si' ? 'WhatsApp ඇණවුම්' : 'WhatsApp Us!'}
          </span>
        </a>
      </aside>
    </>
  );
}
