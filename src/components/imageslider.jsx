import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/ImageSlider.module.css";

export default function ImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;
  const sliderRef = useRef(null);
  const modalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      const header = document.querySelector("header");
      if (header) header.classList.remove("hideHeader");
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      header.style.display = "none";
    } else {
      document.body.style.overflow = "unset";
      header.style.display = "grid";
    }
  }, [isModalOpen]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Background image var is now set inline per slide; no DOM query needed.

  // 🌀 Add blurred background image to modal dynamically
  useEffect(() => {
    if (modalRef.current && images[currentIndex]) {
      modalRef.current.style.setProperty(
        "--bg-url",
        `url(${images[currentIndex]})`
      );
    }
  }, [isModalOpen, currentIndex, images]);

  return (
    <div className={styles.sliderContainer} id="galleria">
      <h3 className={styles.sliderTitle}>{title}</h3>

      <div className={styles.slider}>
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={prevSlide}
        >
          ❮
        </button>

        <div
          className={styles.slideWrapper}
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
              style={{
                "--bg-url": `url(${image})`,
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <img src={image} alt={`Slide ${index + 1}`} draggable="false" />
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {isModalOpen &&
        createPortal(
          <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
            <div
              className={styles.modalContent}
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                draggable="false"
              />

              <button
                className={`${styles.modalArrow} ${styles.modalLeftArrow}`}
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
              >
                ❮
              </button>

              <button
                className={`${styles.modalArrow} ${styles.modalRightArrow}`}
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
              >
                ❯
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
