let movies = {
  johnWick: {
    title: "John Wick",
    rating: "R",
    IMDb_rating: "7.4",
    plot: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
    review: "",
    trailerUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  },
  madMax: {
    title: "Mad Max: Fury Road",
    rating: "R",
    IMDb_rating: "8.1",
    plot: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8"
  },
  dunkirk: {
    title: "Dunkirk",
    rating: "PG-13",
    IMDb_rating: "7.9",
    plot: "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/F-eMt3SrfFU"
  },
  rogueOne: {
    title: "Rogue One: A Star Wars Story",
    rating: "PG",
    IMDb_rating: "7.8",
    plot: "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/frdj1zb9sMY"
  },
  trainToBusan: {
    title: "Train To Busan",
    rating: "R",
    IMDb_rating: "7.5",
    plot: "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/1d4DACwz49o"
  },
  savingPrivateRyan: {
    title: "Saving Private Ryan",
    rating: "R",
    IMDb_rating: "8.6",
    plot: "Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/RYID71hYHzg"
  },
  readyPlayerOne: {
    title: "Ready Player One",
    rating: "PG",
    IMDb_rating: "7.5",
    plot: "Set in 2045, with the world on the brink of chaos and collapse. But the people have found salvation in the OASIS, an expansive virtual reality universe created by the brilliant and eccentric James Halliday (Mark Rylance). When Halliday dies, he leaves his immense fortune to the first person to find a digital Easter egg he has hidden somewhere in the OASIS, sparking a contest that grips the entire world. When an unlikely young hero named Wade Watts (Tye Sheridan) decides to join the contest, he is hurled into a breakneck, reality-bending treasure hunt through a fantastical universe of mystery, discovery and danger. ",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/cSp1dM2Vj48"
  },
  theRevenant: {
    title: "The Revenant",
    rating: "R",
    IMDb_rating: "8",
    plot: "While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilize his survival skills to find a way back to civilization. Grief-stricken and fueled by vengeance, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/LoebZZ8K5N0"
  },
  theDarkKnight: {
    title: "The Dark Knight",
    rating: "PG-13",
    IMDb_rating: "9",
    plot: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  kong: {
    title: "Kong: Skull Island",
    rating: "PG-13",
    IMDb_rating: "6.6",
    plot: "Scientists, soldiers and adventurers unite to explore a mythical, uncharted island in the Pacific Ocean. Cut off from everything they know, they venture into the domain of the mighty Kong, igniting the ultimate battle between man and nature. As their mission of discovery soon becomes one of survival, they must fight to escape from a primal world where humanity does not belong.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/44LdLqgOpjo"
  },
  hereditary: {
    title: "Hereditary",
    rating: "R",
    IMDb_rating: "7.3",
    plot: "When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/V6wWKNij_1M"
  },
  getOut: {
    title: "Get Out",
    rating: "R",
    IMDb_rating: "7.7",
    plot: "Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    review: " ",
    trailerUrl: "https://www.youtube.com/embed/DzfpyUB60YY"
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },

  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
  template: {
    title: "",
    rating: "",
    IMDb_rating: "",
    plot: "",
    review: " ",
    trailerUrl: ""
  },
}
