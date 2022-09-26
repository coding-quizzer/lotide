const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./eqArrays');
const flatten = require('./flatten');
const without = require('./without');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const map = require('./map');


module.exports = {

  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  flatten: flatten,
  without: without,
  countLetters: countLetters,
  letterPositions: letterPositions,
  countOnly: countOnly,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  map: map
};