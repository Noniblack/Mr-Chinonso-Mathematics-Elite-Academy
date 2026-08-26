const curriculum = [
  ["nigerian","WAEC • NECO • JAMB","Number & Numeration",["Number bases","Fractions, decimals & percentages","Ratio, proportion & rates","Indices, logarithms & standard form"]],
  ["nigerian","WAEC • NECO • JAMB","Algebra & Equations",["Algebraic expressions","Linear equations & inequalities","Simultaneous equations","Quadratic equations & applications"]],
  ["nigerian","WAEC • NECO • JAMB","Geometry & Mensuration",["Angles & polygons","Circle geometry","Area, volume & surface area","Coordinate geometry"]],
  ["nigerian","WAEC • NECO • JAMB","Statistics & Probability",["Data representation","Mean, median & mode","Probability","Grouped data & interpretation"]],
  ["nigerian","WAEC • NECO • JAMB","Trigonometry",["Right-triangle ratios","Sine/cosine rule","Bearings & elevation","Graphs & applications"]],
  ["nigerian","WAEC • NECO • JAMB","Functions & Graphs",["Mappings & functions","Linear/quadratic graphs","Variation","Sequences & series"]],
  ["national","NERDC","JSS Mathematics Foundation",["Number & numeration","Basic algebra","Geometry & measurement","Statistics and practical applications"]],
  ["national","NERDC","SS Mathematics Progression",["Number & algebra","Geometry & trigonometry","Statistics & probability","Functions and mathematical reasoning"]],
  ["international","IGCSE","Core Mathematics",["Number","Algebra & graphs","Geometry & trigonometry","Statistics & probability"]],
  ["international","IGCSE","Extended Mathematics",["Quadratics & functions","Coordinate geometry","Vectors & transformations","Compound problems"]],
  ["sat","DIGITAL SAT","Algebra",["Linear equations","Linear inequalities","Systems","Linear functions"]],
  ["sat","DIGITAL SAT","Advanced Math",["Quadratics","Polynomials","Exponentials","Radicals & rational equations"]],
  ["sat","DIGITAL SAT","Problem-Solving & Data Analysis",["Ratios & rates","Percentages","Data & scatterplots","Probability & statistics"]],
  ["sat","DIGITAL SAT","Geometry & Trigonometry",["Area & volume","Angles & triangles","Circles","Right-triangle trigonometry"]],
  ["ib","IB MAA / MAI","Number & Algebra",["Algebraic reasoning","Sequences & series","Exponents & logarithms","Proof and mathematical structure"]],
  ["ib","IB MAA / MAI","Functions",["Function concepts","Graph transformations","Polynomial/rational functions","Modelling"]],
  ["ib","IB MAA / MAI","Geometry & Trigonometry",["Geometry","Trigonometric functions","Vectors","Applications"]],
  ["ib","IB MAA / MAI","Statistics & Probability",["Descriptive statistics","Probability","Distributions","Statistical reasoning"]],
  ["ib","IB MAA / MAI","Calculus",["Limits & derivatives","Integration","Applications","Further calculus for HL"]],
  ["preuni","PRE-UNIVERSITY","Calculus & Analysis",["Functions & limits","Differentiation","Integration","Sequences, series & modelling"]],
  ["preuni","PRE-UNIVERSITY","Linear Algebra & Vectors",["Vectors","Matrices","Systems","Geometric applications"]],
  ["preuni","PRE-UNIVERSITY","Advanced Statistics",["Probability models","Distributions","Inference","Data interpretation"]],
  ["preuni","PRE-UNIVERSITY","Mathematical Reasoning",["Proof","Problem solving","Modelling","Non-routine applications"]]
];

const grid = document.getElementById("curriculumGrid");
const filters = document.querySelectorAll(".filter");

function render(filter = "all") {
  grid.innerHTML = curriculum
    .filter(x => filter === "all" || x[0] === filter)
    .map(x => `
      <article class="curr-card">
        <span class="badge">${x[1]}</span>
        <h3>${x[2]}</h3>
        <ul>${x[3].map(t => `<li>${t}</li>`).join("")}</ul>
      </article>
    `).join("");
}

render();

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.filter);
  });
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  const message =
    "Hello Mr Chinonso, I would like to enquire about Mr Chinonso Mathematics Elite Academy.%0A%0A" +
    "Name: " + encodeURIComponent(data.get("name")) + "%0A" +
    "Student level: " + encodeURIComponent(data.get("level")) + "%0A" +
    "Target/topic: " + encodeURIComponent(data.get("target")) + "%0A" +
    "Message: " + encodeURIComponent(data.get("message") || "No additional message.");

  window.open(
    "https://wa.me/2348063357348?text=" + message,
    "_blank"
  );
});
