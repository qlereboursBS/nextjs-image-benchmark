import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/img1_original.jpg',
    title: 'Original, not compressed (4.2Mo)',
  },
  {
    src: '/img1_100.jpg',
    title: 'Not compressed (4.2Mo)',
  },
  {
    src: '/img1_90.jpg',
    title: '90% quality (2.7Mo)',
  },
  {
    src: '/img1_80.jpg',
    title: '80% quality (1.8Mo)',
  },
  {
    src: '/img1_50.jpg',
    title: '50% quality (1Mo)',
  },
  {
    src: '/img1_20.jpg',
    title: '20% quality (500Ko)',
  },
  {
    src: '/img_2.JPG',
    title: 'Image 2 (5 Mo)',
  },
  {
    src: '/img_3.JPG',
    title: 'Image 3 (3.5Mo)',
  },
  {
    src: '/img_4.JPG',
    title: 'Image 4 (5.6Mo)',
  },
  {
    src: '/img_5.JPG',
    title: 'Image 5 (5.4Mo)',
  },
  {
    src: '/img_6.jpg',
    title: 'Image 6 (5.6Mo)',
  },
]

const InitialSize = () => {


  return (
    <div>
      <div style={{ height: '120VH', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Scroll down to load the pictures</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          images.map(({ src, title }) => (
            <div style={{ width: '25%', height: '25VH', position: 'relative' }}>
              <Image src={src} layout="fill" objectFit="cover" alt={title} title={title} />
              <h4 style={{ position: 'absolute', top: 10, right: 10 }}>{title}</h4>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default InitialSize;

InitialSize.propTypes = {};

InitialSize.defaultProps = {}