'use client';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { useTheme } from '../../components/ThemeProvider';

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="w-full bg-(--bg-bg)  py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        
        <div className="flex flex-col items-start">
          <Image
            src={theme === 'light'
              ? '/landingpage-images/light-theme-logo.png'
              : '/landingpage-images/dark-theme-logo.png'
            }
            alt="MeMyself.ai Logo"
            width={140}
            height={60}
            priority
          />
          <span className="text-(--text-secondary) text-sm">
            2025 MeMyself.ai. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-(--text-secondary) font-inter text-sm">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Support</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 sm:mt-0 text-(--text-secondary)">
            <a href="#" aria-label="LinkedIn" className="hover:text-buttonBg transition">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-buttonBg transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-buttonBg transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
