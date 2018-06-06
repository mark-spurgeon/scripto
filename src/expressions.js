var ScriptoExpressions = [
  /* Screenplay Expressions */
  "A",
  "S",
  "C",
  "CA",
  "D",
  "I",
  /* Generic Expressions */
  "T",
  "ST",
  "P",
];

var ScriptoExpressionDictionary = {
  "A":"Title of an act.",
  "S": "Title of a scene. Example : EXT. - SOMEWHERE - DAY",
  "C": "Character. Linked to a character's information (specification here)[#character]",
  "D": "Dialogue.",
  "I": "Instructions given for screen.",
  "T": "Generic title. Used as screenplay's title but also other types",
  "ST": "Generic subtitle",
  "P": "Generic paragraph. Can describe an action or a setting as well.",
}

module.exports = {
  ScriptoExpressions,
  ScriptoExpressionDictionary
}
