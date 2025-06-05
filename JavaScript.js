const counters = document.querySelectorAll('.achievement-card p');
counters.forEach(counter => {
  const updateCount = () => {
    const target = counter.innerText.match(/\d+/)[0];
    let count = 0;
    const increment = target / 50;
    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = counter.innerText.replace(/\d+/, Math.floor(count));
        requestAnimationFrame(update);
      } else {
        counter.innerText = counter.innerText.replace(/\d+/, target);
      }
    };
    update();
  };
  updateCount();
});
