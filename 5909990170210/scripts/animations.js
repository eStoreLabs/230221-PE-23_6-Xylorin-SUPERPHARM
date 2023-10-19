const title = document.querySelector('.es-kv__title');
const subtitle = document.querySelector('.es-kv__subtitle');
const kvFeatures = document.querySelectorAll('.es-kv__single');
const abFeatures = document.querySelectorAll('.es-about__single');
const features = document.querySelectorAll('.es-features__single');
const packshot = document.querySelector('.es-features__packshot-container');
const featuresIcon = document.querySelectorAll('.es-features__icon-single');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(title);
observer.observe(subtitle);
kvFeatures.forEach(kvFeature => {
    observer.observe(kvFeature);
});
abFeatures.forEach(abFeature => {
    observer.observe(abFeature);
});
observer.observe(packshot);
featuresIcon.forEach(featureIcon => {
    observer.observe(featureIcon);
});
features.forEach(feature => {
  observer.observe(feature);
});