import emptyCardImg from "../assets/emtycard.png";

function StackPanel({ stack, onRemove, onClear }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
        <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">
          {stack.length} Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl">
          <img
            src={emptyCardImg}
            alt="Empty Stack"
            className="w-20 h-20 mx-auto mb-3 object-contain opacity-80"
          />

          <p className="text-gray-600 font-medium">Your stack is empty</p>
          <p className="text-sm text-gray-400 mt-1">
            Add technologies to get started
          </p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-3 mb-4">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold text-lg px-2"
                  aria-label="Remove"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onClear}
            className="w-full py-2.5 rounded-xl border-2 border-red-200 text-red-600 font-semibold hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default StackPanel;
