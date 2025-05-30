export const updateOnVirtualData = (swiper) => {
  if (
    !swiper ||
    swiper.destroyed ||
    !swiper.params.virtual ||
    (swiper.params.virtual && !swiper.params.virtual.enabled)
  )
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  swiper.emit('_virtualUpdated');
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};
