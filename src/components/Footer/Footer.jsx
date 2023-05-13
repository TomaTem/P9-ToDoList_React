import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start fixed-bottom'>
      <div className='text-center p-3 bg-secondary'>
        © 2023 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          {' '}
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
