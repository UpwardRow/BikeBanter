'use client';

import { Button } from "@/components/ui/button";
import { UploadUserBike } from "@/utils/upload-user-bike";
import React from "react";

export default function UploadBikeButton() {

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0];
    if (files) {
      console.log('Selected file:', files);
      UploadUserBike(files);
    }
  };

  return (
    <div>
      <Button
      onClick={handleUploadClick}
      style={{
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      >
        Upload New Image
      </Button>


      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>    
  );
}