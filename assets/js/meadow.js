fetch("/data/meadow.json")
  .then((res) => res.json())
  .then((plants) => {
    const meadow = document.getElementById("meadow");

    plants.forEach((p) => {
      const el = document.createElement("div");
      el.style.animationDuration = 2 + Math.random() * 3 + "s";
      el.className = "meadow-plant";
      el.textContent = p.icon;
      el.style.left = p.x + "%";
      el.style.top = p.y + "%";
      meadow.appendChild(el);
    });
  });
