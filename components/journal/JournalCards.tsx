import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Journal.module.scss';


const journalData = [
  {
    href: '#',
    imageSrc: '/images/journal/journal-1.png',
    imageAlt: 'Kayak and tent by the sea',
    title: 'Coming Soon',
    text: 'Coming Soon.',
  },
  {
    href: '#',
    imageSrc: '/images/journal/journal-2.png',
    imageAlt: 'Kayak in a cove',
    title: 'Coming Soon',
    text: 'Coming Soon',
  },
  {
    href: '#',
    imageSrc: '/images/journal/journal-3.png',
    imageAlt: 'Shoes on the shore',
    title: 'Coming Soon',
    text: 'Coming Soon',
  },
];

function JournalCards() {

  return (
    <ul className={styles.journal__list}>
      {journalData.map((item, index) => (
        <li key={index} className={styles['journal-card']}>
          <Link href={item.href}>
            <div className={styles['journal-card__image-wrapper']}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={360}
                height={203}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <h3 className={styles['journal-card__title']}>{item.title}</h3>
            <p className={styles['journal-card__text']}>{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default JournalCards
