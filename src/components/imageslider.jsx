import { useState, useEffect, useCallback, useRef } from "react";

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

  // 🌀 Add blurred background image to each slide dynamically
  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.querySelectorAll(`.${styles.slide}`);
      slides.forEach((slide, index) => {
        const img = slide.querySelector("img");
        if (img && img.src) {
          slide.style.setProperty("--bg-url", `url(${img.src})`);
        }
      });
    }
  }, [images]);

  // 🌀 Add blurred background image to modal dynamically
  useEffect(() => {
    if (modalRef.current && images[currentIndex]) {
      modalRef.current.style.setProperty("--bg-url", `url(${images[currentIndex]})`);
    }
  }, [isModalOpen, currentIndex, images]);
}
