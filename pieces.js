// PIECES — one entry per published piece.
// Add a new line here every time a new piece goes live, so the
// Random button (and, later, any other cross-page feature) can
// find it. "link" should be the clean folder-style URL, e.g.
// "/post-piecename/" (matching the post's own folder name).

var PIECES = [
  {
    title: "Tragedy at Shea Stadium",
    author: "Laura Fakenaem",
    sport: "baseball",
    type: "fiction",
    link: "/post-baseball-example/"
  },
  {
    title: "Explaining Øderice",
    author: "Joey Anonimo",
    sport: "football",
    type: "nonfiction",
    link: "/post-football-example/"
  }
  // Papa's Bowling Shoes and Zohran & The Knicks aren't included yet —
  // they don't have real post pages to link to. Add them here once
  // they do, matching the shape above.
];

function goToRandomPiece() {
  if (PIECES.length === 0) return;
  var pick = PIECES[Math.floor(Math.random() * PIECES.length)];
  window.open(pick.link, '_blank');
}
