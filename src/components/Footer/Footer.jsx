import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start fixed-bottom'>
      <div className='text-center p-3 bg-secondary'>
        © 2023 {' '}
        <a
          className='text-dark'
          href='https://github.com/TomaTem'
          target='_blank'
          rel='noreferrer'>
          TomaTem
        </a>
      </div>
    </footer>
  );
}
