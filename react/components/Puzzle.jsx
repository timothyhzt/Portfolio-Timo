/*
  Future Puzzle component.

  Each piece can become a reusable link or a small data-driven component.
  The image paths match the assets already used by the HTML assignment.

  const pieces = [
    { name: 'About', image: 'puzzle_piece-top left v2.png', target: '#about' },
    { name: 'Lessons', image: 'puzzle_piece-top right v2.png', target: '#lessons' },
    { name: 'Reflection', image: 'puzzle_piece-middle left v2.png', target: '#reflection' },
    { name: 'Projects', image: 'puzzle_piece-middle right v2.png', target: '#projects' },
    { name: 'Skills', image: 'puzzle_piece-bottom left v2.png', target: '#skills' },
    { name: 'Contact', image: 'puzzle_piece-bottom right v2.png', target: '#footer' }
  ];

  function Puzzle() {
    return (
      <div className="about-puzzle" aria-label="Explore the portfolio">
        {pieces.map((piece) => (
          <a className="puzzle-piece" href={piece.target} key={piece.name}>
            <img src={`hero-puzzle-assets/${piece.image}`} alt="" />
            <span className="puzzle-label">{piece.name}</span>
          </a>
        ))}
      </div>
    );
  }

  export default Puzzle;
*/