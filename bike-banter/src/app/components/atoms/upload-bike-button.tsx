'use client';

import { Button } from "@/components/ui/button";

export default function UploadBikeButton() {
  return (
    <Button
      onClick={() => alert('Uploading to database...')}
      style={{
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Upload New Bike
    </Button>
  );
}