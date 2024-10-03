import React, { useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Button from "../common/Button";
import { Upload } from "lucide-react";

const Layout = ({ children }) => {
  // Declare the file input reference
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden file input click
    }
  };

  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
      />

      {/* Button to trigger file input */}
      <Button
        variant="primary"
        icon={<Upload size={18} />}
        onClick={handleFileInputClick}
      >
        Upload Plant Image
      </Button>

      <Footer />
    </div>
  );
};

export default Layout;
