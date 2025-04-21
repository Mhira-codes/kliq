type CardProps = {
    count: number;
    label: string;
    status: string;
    onClick: () => void;
    isActive: boolean;
  };
  
  export function Card({ count, label, status, onClick, isActive }: CardProps) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer p-4 rounded-2xl shadow-md w-48 text-white transition duration-200 ${
          isActive ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
        }`}
      >
        <div className="text-xl font-semibold">{label}</div>
        <div className="text-3xl mt-2 font-bold">{count}</div>
      </div>
    );
  }
  