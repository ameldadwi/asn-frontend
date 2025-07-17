import React from "react";
import PosDasarHukum from "./PosDasarHukum";

const DasarHukumPosPage = () => {
  // Nanti ganti ini dengan role login dari context/auth
  const isAdmin = true; // atau false kalau bukan admin

  return (
    <div>
      <PosDasarHukum isAdmin={isAdmin} />
    </div>
  );
};

export default DasarHukumPosPage;