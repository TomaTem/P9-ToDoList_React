import React from 'react';

export default function Header() {
  return (
    <>
      <nav
        className="navbar bg-primary fixed-top" data-bs-theme="dark">
        <div className='container-fluid'>
          <span className='navbar-brand'>ToDoList</span>
        </div>
      </nav>
    </>
  );
}

