import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alret() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 flex-none mt-0.5"
          >
            <circle cx="12" cy="12" r="12" fill="#B91C1C"></circle>
            <path stroke="#fff" strokeWidth="2" d="M8 8l8 8M16 8l-8 8"></path>
          </svg>
        )}
        <strong className="flex-1 text-base font-semibold leading-7 text-red-500">
          {alert.msg}
        </strong>
      </p>
    )
  );
}

export default Alret;
