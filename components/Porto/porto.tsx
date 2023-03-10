import React, {useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import styles from './porto.module.css';
import proj1 from '../../public/project/project-todo.jpeg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Link from 'next/link';

export const Porto = () => {
  // const [porto, setPorto] = useState(false);
  const [Project, setProject] = useState(true);
  const [Slicing, setSlicing] = useState(false);

  const showProject = () => {
    setProject(true);
    setSlicing(false);
  };
  const showSlicing = () => {
    setSlicing(true);
    setProject(false);
  };

  return (
    <div className={styles.porto}>
      <div className={styles.btnContainer}>
        {/* <button className={styles.button_1} onClick={() => setPorto(!porto)}>
          My {porto ? <>Slicing UI</> : <>Project</>}
        </button> */}
        <button
          className={`${styles.button_1} ${Project ? styles.active : ''}`}
          onClick={showProject}>
          My Project
        </button>
        <button
          className={`${styles.button_1} ${Slicing ? styles.active : ''}`}
          onClick={showSlicing}>
          My Slicing UI
        </button>
      </div>
      <div className={styles.bungkus}>
        <div className={styles.portoContainer}>
          {/* {porto ? <KumpulanProject /> : <KumpulanSlicingUI />} */}
          {Project && <KumpulanProject />}
          {Slicing && <KumpulanSlicingUI />}
        </div>
      </div>
    </div>
  );
};

const KumpulanProject = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        <SwiperSlide>
          <Project title={'project sejuta dev'} alt={'string'} src={proj1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const KumpulanSlicingUI = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
        <SwiperSlide>
          <SlicingUI src={proj1} alt="slicingthumnb" title="todo list" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

interface PropProject {
  title: string;
  alt: string;
  src: StaticImageData;
}
// interface PropProject1 {
//   color: string;
// }

const Project = ({title, src, alt}: PropProject) => {
  // const Project = () => {
  return (
    <>
      <div className={styles.project}>
        <Link
          href="https://yogyy.github.io/react-todo-localhost/"
          target="_blank"
          rel="noopener noreferrer">
          <Image title={title} alt={alt} sizes="400px" src={src} style={{aspectRatio: '16/9'}} />
        </Link>
      </div>
      {/* <div className={styles.cont_button2}>
        <Link className={styles.button_2} href="/">
          code
        </Link>
        <Link className={styles.button_2} href="/">
          demo
        </Link>
      </div> */}
    </>
  );
};
const SlicingUI = ({title, src, alt}: PropProject) => {
  // const SlicingUI = ({color}: PropProject1) => {
  return (
    <>
      <div className={styles.project}>
        <Image title={title} alt={alt} src={src} style={{aspectRatio: '16/9', width: '100%'}} />
      </div>
    </>
  );
};
