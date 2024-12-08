const Rating = ({ rate, count, id }) => {
  const percentage = (rate / 5) * 100;

  return (
    <div key={id} className="flex items-center font-['Quicksand']">
      <div className="relative flex">
        <div className="flex text-gray-300">
          {Array(5)
            .fill()
            .map((_, index) => (
              <span key={index} className="text-lg">
                ★
              </span>
            ))}
        </div>
        <div
          className="absolute top-0 left-0 flex overflow-hidden text-yellow-500"
          style={{ width: `${percentage}%` }}
        >
          {Array(5)
            .fill()
            .map((_, index) => (
              <span key={index} className="text-lg">
                ★
              </span>
            ))}
        </div>
      </div>
      <span className="ml-2 text-sm text-gray-600">({count})</span>
    </div>
  );
};

export default Rating;
