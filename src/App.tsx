import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AdminPanel } from './components/AdminPanel';
import { CheckCircle2 } from 'lucide-react';

const AdminApp: React.FC = () => {
  const { toastMessage } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-rose-100 selection:text-rose-900 font-sans antialiased overflow-x-hidden w-full">
      {/* Primary Dedicated Admin Console */}
      <main className="flex-1 overflow-x-hidden">
        <AdminPanel />
      </main>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce max-w-[90vw]">
          <div className="bg-stone-900/95 backdrop-blur-md text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center gap-2.5 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AdminApp />
    </ShopProvider>
  );
}
