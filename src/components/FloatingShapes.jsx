const shapes = Array.from({ length: 10 }, (_, i) => i);

function FloatingShapes() {
  return (
    <ul className="shapes">
      {shapes.map((i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
}

export default FloatingShapes;
