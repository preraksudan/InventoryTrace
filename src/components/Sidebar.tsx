import { Link } from "react-router-dom";

import { useState } from 'react';

export default function PageWithSidebar() {
  const [selected, setSelected] = useState(pages[0]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: '220px',
        background: '#1e293b',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setSelected(page)}
            style={{
              background: selected.id === page.id ? '#334155' : 'transparent',
              color: '#fff',
              border: 'none',
              padding: '10px',
              textAlign: 'left',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            {page.title}
          </button>
        ))}
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '30px' }}>
        <div style={{
          background: '#334155',
          padding: '20px',
          borderRadius: '10px',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          {selected.banner}
        </div>
      </main>
    </div>
  );
}

const pages = [
  { id: 'dashboard', title: 'Dashboard', banner: 'Welcome to Dashboard!' },
  { id: 'account', title: 'Account Profile', banner: 'Manage your Account Profile here.' },
  { id: 'products', title: 'Product Category', banner: 'Browse and manage Product Categories.' }
];
