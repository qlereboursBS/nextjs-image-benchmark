import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/img1_100.jpg',
    title: 'Local - Not compressed (4.2Mo)',
  },
  {
    src: 'https://cdn.imgpaste.net/2021/10/20/KsDdCU.jpg',
    title: 'Remote - Not compressed (4.2Mo)',
  },
  {
    src: '/img1_90.jpg',
    title: 'Local - 90% quality (2.7Mo)',
  },
  {
    src: 'https://cdn.imgpaste.net/2021/10/20/KsDXf3.jpg',
    title: 'Remote - 90% quality (2.7Mo)',
  },
  {
    src: '/img1_80.jpg',
    title: 'Local - 80% quality (1.8Mo)',
  },
  {
    src: 'https://cdn.imgpaste.net/2021/10/20/KsDSpw.jpg',
    title: 'Remote - 80% quality (1.8Mo)',
  },
  {
    src: '/img1_50.jpg',
    title: 'Local - 50% quality (1Mo)',
  },
  {
    src: 'https://cdn.imgpaste.net/2021/10/20/KsDK67.jpg',
    title: 'Remote - 50% quality (1Mo)',
  },
  {
    src: '/img1_20.jpg',
    title: 'Local - 20% quality (500Ko)',
  },
  {
    src: 'https://cdn.imgpaste.net/2021/10/20/KsD7Z2.jpg',
    title: 'Remote - 20% quality (500Ko)',
  },
]

const InitialSize = () => {


  return (
    <div>
      <div style={{ height: '120VH', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Scroll down to load the first picture</p>
      </div>
      {
        images.map(({ src, title }) => (
          <div style={{ width: '100%', height: '100VH', position: 'relative' }}>
            <Image src={src} layout="fill" alt={title} title={title} />
            <h2 style={{ position: 'absolute', top: 10, right: 10 }}>{title}</h2>
          </div>
        ))
      }

    </div>
  )
}

export default InitialSize;

InitialSize.propTypes = {};

InitialSize.defaultProps = {}