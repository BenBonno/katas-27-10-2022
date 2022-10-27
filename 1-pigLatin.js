// Nos jeunes amis d'outre-atlantique ont
// une sorte de code secret. En effet,
// lorsqu'ils ne veulent pas être compris
// par les adultes, ils se mettent à parler
// une forme de dialecte qui, pour les
// francophones, s'apparenteraient à
// l'enfant bâtard du verlan et du louchebem.
// Ce code s'appelle le pig latin.

// L'idée est de prendre la première lettre
// d'un mot, de la basculer à la fin, et d'y
// ajouter les lettres "ay" en guise de
// conclusion.

// Votre mission, que vous l'acceptiez ou non,
// est d'écrire une fonction qui prendra en
// paramètre un chaîne de caractères en anglais,
// et qui retournera cette même chaîne de
// caractères traduite en pig latin, afin
// d'aider les jeunes à ne pas être compris
// des adultes dans leur vie.

// Bien entendu, en guise d'aide aux parents,
// vous écrirez la fonction inverse, qui prend
// en paramètre une chaîne de caractère en pig
// latin et retourne son équivalent en anglais.

// La chaîne de caractères ne contient ni
// majuscules, ni ponctuations, et, parce que
// je ne suis pas un monstre, je vous laisse
// la possibilité d'utiliser des méthodes de
// manipulation de chaînes de caractères.

// Happy coding!

const toPigLatin = (str) => {
  // La magie s'opère ici!
  const toArraySplited = str.split(" ")
  console.log(toArraySplited);

  const newArrayFirstLetter = []

  for (let i = 0; i < toArraySplited.length; i++) {
    newArrayFirstLetter.push(toArraySplited[i].slice(1,) + toArraySplited[i].charAt(0) + "ay")
  }
  return newArrayFirstLetter.join(" ")
};



const toEnglish = (str) => {
  // La magie s'opère ici!
  return str.split(" ").map(e => e[e.length - 3] + e.slice(0, -3)).join(" ")
};

console.log(toPigLatin("my students are a bunch of freaking gems"));
// Le résultat attendu :
// ymay tudentssay reaay aay unchbay foay reakingfay emsgay

console.log(toEnglish("ymay tudentssay reaay aay unchbay foay reakingfay emsgay")
);
// Le résultat attendu :
// my students are a bunch of freaking gems


const toto = "my students are a bunch of freaking gems"

console.log(toto.split(" "));

console.log(toto.split(" ")[1][1])

console.log(toto.l);