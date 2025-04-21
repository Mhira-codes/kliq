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
        className={` flex flex-col items-center cursor-pointer p-4 rounded-md shadow-md w-70 text-white transition duration-200 ${
          isActive ? 'bg-amber-500' : 'bg-amber-500 hover:bg-amber-400'
        }`}
      >
          <div className="text-2xl mt-2 font-semibold">{count}</div>
        <div className="text-xl font-medium">{label}</div>
      
      </div>
    );
  }
  