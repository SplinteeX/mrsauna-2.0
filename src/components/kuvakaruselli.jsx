import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../styles/kuvakaruselli.module.css";

export default function Kuvakaruselli({ images = [], title = '', autoplay = false, interval = 4000 }) {
  const validImages = (images || []).filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const sliderRef = useRef(null);
  const modalRef = useRef(null);
  const timeoutRef = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || validImages.length === 0) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoplay, interval, nextSlide, validImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  // Blurred background for slides
  useEffect(() => {
    if (!sliderRef.current) return;
    const slides = sliderRef.current.querySelectorAll(`.${styles.slide}`);
    slides.forEach((slide, i) => {
      const img = slide.querySelector("img");
      if (img && img.src) slide.style.setProperty("--bg-url", `url(${img.src})`);
    });
  }, [validImages]);

  // Blurred background for modal
  useEffect(() => {
    if (modalRef.current && validImages[currentIndex]) {
      modalRef.current.style.setProperty("--bg-url", `url(${validImages[currentIndex]})`);
    }
  }, [isModalOpen, currentIndex, validImages]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  if (validImages.length === 0) return null;

  const goToSlide = (i) => setCurrentIndex(i);

  return (
    <div className={styles.sliderContainer}>
      {title && <h3 className={styles.sliderTitle}>{title}</h3>}

      <div className={styles.slider}>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide}>❮</button>

        <div
          className={styles.slideWrapper}
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {validImages.map((img, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === currentIndex ? styles.active : ""}`}
              style={{ transform: `translateX(${(i - currentIndex) * 100}%)` }}
              onClick={() => setIsModalOpen(true)}
            >
              <img src={img} alt={`Slide ${i + 1}`} draggable="false" />
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide}>❯</button>
      </div>

      <div className={styles.footer}>
        <div className={styles.prevLabel} onClick={prevSlide}>Edellinen</div>

        <div className={styles.pages}>
          {validImages.map((_, i) => (
            <button
              key={i}
              className={`${styles.pageBtn} ${i === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button className={styles.nextLink} onClick={nextSlide}>Seuraava</button>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>✕</button>
            <img src={validImages[currentIndex]} alt={`Modal ${currentIndex + 1}`} draggable="false" />
            <button className={`${styles.modalArrow} ${styles.modalLeftArrow}`} onClick={(e) => { e.stopPropagation(); prevSlide(); }}>❮</button>
            <button className={`${styles.modalArrow} ${styles.modalRightArrow}`} onClick={(e) => { e.stopPropagation(); nextSlide(); }}>❯</button>
          </div>
        </div>
      )}
    </div>
  );
}
