import React from 'react';

export default function Header() {
  return (
    <>
      <nav
        className="navbar bg-primary fixed-top" data-bs-theme="dark">
        <div className='container-fluid'>
          <span className='navbar-brand'>ToDoList</span>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

