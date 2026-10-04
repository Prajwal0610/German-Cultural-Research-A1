const lessons = {
  greetings:{
    title:"Greetings & Etiquette",
    text:"Practice greetings, introductions and polite expressions. Learn when a formal or informal form may be appropriate.",
    phrase:"Guten Tag! Wie heißen Sie? — Ich heiße Anna."
  },
  festivals:{
    title:"Festivals & Traditions",
    text:"Use a visual calendar to learn about selected German festivals and practice months, dates and simple opinions.",
    phrase:"Das Fest ist im Oktober. Ich mag das Fest."
  },
  food:{
    title:"Food & Everyday Life",
    text:"Use a mini café simulation to practice food vocabulary, prices, preferences and polite requests.",
    phrase:"Ich möchte eine Brezel, bitte. Was kostet das?"
  },
  bauhaus:{
    title:"Bauhaus & Design",
    text:"Discover German design through colours and geometric shapes. Learners create and describe a simple poster.",
    phrase:"Das Quadrat ist blau. Der Kreis ist rot."
  }
};

function showInfo(key){
  const x=lessons[key];
  document.getElementById("modal-title").textContent=x.title;
  document.getElementById("modal-text").textContent=x.text;
  document.getElementById("modal-phrase").textContent=x.phrase;
  document.getElementById("modal").style.display="flex";
}
function closeModal(){document.getElementById("modal").style.display="none"}
function answer(btn, correct){
  document.getElementById("result").textContent=correct ? "✓ Correct! Danke means Thank you." : "✕ Try again. The correct answer is Danke.";
  document.getElementById("result").style.color=correct ? "#218739" : "#c43b32";
}
window.onclick=e=>{if(e.target.id==="modal")closeModal()}
