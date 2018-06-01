import $ from 'jquery';
import { $win, $body } from '../constants/elements';

const wizardNames = [
  'Burgle',
  'Merlin',
  'Gandalf',
  'Bigsby',
  'Nystal',
  'Pugs',
  'Khadgar',
  'Tenser',
  'Melf',
  'Tasha',
  'Potter',
  'Jafar',
  'Begareth',
  'Rary',
  'Leomund',
  'Morgana',
  'Mordenkainen',
  'Balthazar',
  'Yaga',
  'Otilukes',
  'Drawmij',
  'Otto',
  'Serten',
  'Gobin',
  'Granger',
  'La Fey',
  'Bix Bile',
  'Pan',
  'Aero',
  'Emdor',
  'Weasley',
  'Nicodemus',
  'Jostes',
  'Luthorn',
  'Draco',
  'Malfoy',
  'Snape',
  'Oz',
];

const names = [
  'cube',
  'circle',
  'disk',
  'cone',
  'web',
  'missle',
  'sphere',
  'doorway',
  'home',
  'shelter',
  'camp',
  'gate',
  'touch',
  'ward',
  'bolt',
  'lightning',
  'ray',
  'sleep',
  'wave',
  'aura',
  'cloud',
  'summoning',
  'wall',
  'arrow',
  'rope',
  'cloak',
  'mouth',
  'mount',
  'dispel',
  'detection',
  'form',
  'servant',
  'protection',
  'shield',
  'shadow',
  'claw',
  'storm',
  'trap',
  'wings',
  'strike',
  'fog',
  'eye',
  'growth',
  'music',
  'mirage',
  'dream',
  'fabrication',
  'oath',
  'transmutation',
  'blast',
  'blade',
  'death',
  'binding',
  'sight',
  'ball',
  'note',
  'alarm',
  'armor',
  'charm',
  'light',
  'fall',
  'spray',
  'hypnotism',
  'message',
  'force',
  'climb',
  'taunt',
  'glyph',
  'pocket',
  'binding',
  'rain',
  'image',
  'swarm',
  'wind',
  'lock',
  'knock',
  'insect summoning',
  'avian summoning',
  'lizard summoning',
  'meteor',
  'page',
  'rune',
  'water',
  'wind',
  'earth',
  'fire',
  'monster',
  'contagion',
  'plague',
  'scrying',
  'resurrection',
  'ice',
  'avalanche',
  'skin',
  'walk',
  'illusion',
  'hand',
  'melting',
  'transport',
  'teleport',
  'statue',
  'vision',
  'undead',
  'plant',
  'tree',
  'fist',
  'clone',
  'weather',
  'dance',
  'blindness',
  'deafness',
  'mute',
  'slow',
  'sinking',
  'strength',
  'crystal',
  'rage',
  'change',
  'stasis',
  'blessing',
  'curse',
  'poison',
  'snare',
  'animation',
  'drink',
  'food',
  'pattern',
  'blink',
  'reflection',
  'glamer',
  'repulsion',
  'veil',
  'gravity',
  'immunity',
  'drain',
  'stop',
  'guide',
  'copy',
  'crush',
  'pulverize',
  'ability',
  'trick',
  'invisibility',
  'tentacles',
  'enchantment',
  'identification',
];

const setRunes = [
  'cube',
  'circle',
  'disk',
  'cone',
  'web',
  'missle',
  'sphere',
  'doorway',
  'home',
  'shelter',
  'camp',
  'gate',
  'touch',
  'ward',
  'bolt',
  'lightning',
  'ray',
  'sleep',
  'wave',
  'aura',
  'cloud',
  'summoning',
  'wall',
  'arrow',
  'blast',
  'trap',
  'storm',
  'claw',
  'strike',
];

function randomSelector(theArray) {
  const i = Math.floor((Math.random() * theArray.length));
  return i;
}

function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}


function loadAdjectives() {
  const xmlhttp = new XMLHttpRequest();
  let object = [];

  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      object = this.responseText;
    }
  };

  xmlhttp.open('GET', '/_src/js/demo-data/adjective-list.json', false);
  xmlhttp.send();
  const attributes = JSON.parse(object);
  const x = randomSelector(attributes);

  const spellAdjective = attributes[x];

  return spellAdjective;
}

function setName(type) {
  const spellTypeName = type;
  const i = randomSelector(wizardNames);
  const wizardName = wizardNames[i];
  const adjective = loadAdjectives();
  document.getElementById('generated-name').innerHTML = `${wizardName}'s ${adjective} ${spellTypeName} `;


  if (wizardName === 'Jostes') {
    document.getElementById('generated-name').innerHTML = `${wizardName}'s ${adjective} Firey ${spellTypeName}`;
  }

  if (wizardName === 'Snape') {
    document.getElementById('generated-name').innerHTML = `${wizardName}'s potion of ${adjective} ${spellTypeName}`;
  }
}

function setRune() {
  const rune = document.getElementById('rune');
  const i = randomSelector(names);

  if ($('#rune').hasClass(names[i])) {
    return;
  }

  if (setRunes.includes(names[i])) {
    $('.rune-shape').css('clip-path', '');
    $('.rune-shape').css('-webkit-clip-path', '');
    rune.classList = '';
    rune.classList.add('rune-shape');
    rune.classList.add(names[i]);
  } else {
      const clipPathArray = [];

    for (let y = 0; y <= 15; y++) {
      const number = Math.floor((Math.random() * 100) - 1);
      clipPathArray.push(number);
    }

    $('.rune-shape').css('clip-path', `polygon(
    ${clipPathArray[0]}% ${clipPathArray[1]}%,
    ${clipPathArray[2]}% ${clipPathArray[3]}%,
    ${clipPathArray[4]}% ${clipPathArray[5]}%,
    ${clipPathArray[6]}% ${clipPathArray[7]}%,
    ${clipPathArray[8]}% ${clipPathArray[9]}%,
    ${clipPathArray[10]}% ${clipPathArray[11]}%,
    ${clipPathArray[12]}% ${clipPathArray[13]}%,
    ${clipPathArray[14]}% ${clipPathArray[15]}%)`);

    $('.rune-shape').css('-webkit-clip-path', `polygon(
    ${clipPathArray[0]}% ${clipPathArray[1]}%,
    ${clipPathArray[2]}% ${clipPathArray[3]}%,
    ${clipPathArray[4]}% ${clipPathArray[5]}%,
    ${clipPathArray[6]}% ${clipPathArray[7]}%,
    ${clipPathArray[8]}% ${clipPathArray[9]}%,
    ${clipPathArray[10]}% ${clipPathArray[11]}%,
    ${clipPathArray[12]}% ${clipPathArray[13]}%,
    ${clipPathArray[14]}% ${clipPathArray[15]}%)`);
  }

const color = getRandomColor();

document.documentElement.style.setProperty(`--background-color`, color);

  setName(names[i]);
}

// This is invoked by the `main.js` entry file one directory up
export default function sample() {
  $body.on('click tap touch', '.js-build', setRune);
  // $win.on('load', loadAdjectives);
}
