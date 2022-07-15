export const Button = ({ children, onClick, type = 'button' }) => (
  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded" type={type} onClick={onClick}>
    {children}
  </button>
);
