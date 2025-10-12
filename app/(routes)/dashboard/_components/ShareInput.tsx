"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { constructFileUrl } from "@/lib/utils";


interface ShareInputProps {
  file: any;
}

export const ShareInput = ({ file }: ShareInputProps) => {
  const [copied, setCopied] = useState(false);

  const shareLink =`${process.env.NEXT_PUBLIC_SITE_URL}/workspace/${file._id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <p className="text-gray-700 font-medium mb-1">Copy share link</p>
        <div className="flex gap-2 items-center">
          <Input value={shareLink} readOnly className="flex-1" />
          <Button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</Button>
        </div>
      </div>
    </div>
  );
};
