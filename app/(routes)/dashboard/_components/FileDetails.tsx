"use client";

import Image from "next/image";
import { convertFileSize } from "@/lib/utils";

interface FileDetailsProps {
  file: any; // NoteVerse file object from Convex
}

export const FileDetails = ({ file }: FileDetailsProps) => {
  return (
    <div className="space-y-4 p-2">
      {/* File Thumbnail */}
      <div className="flex items-center gap-4">
        <Image
          src="/assets/icons/file-document.svg"
          alt="file"
          width={50}
          height={50}
        />
        <div>
          <p className="font-medium">{file.fileName}</p>
          <p className="text-sm text-gray-500">
            Created: {new Date(file._creationTime).toLocaleString()}
          </p>
        </div>
      </div>

      {/* File Details */}
      <div className="space-y-1">
        <div className="flex justify-between">
          <p className="text-gray-600">Size:</p>
          <p>{convertFileSize(file.size || 0)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Author:</p>
          <p>{file.createdBy || "Unknown"}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Last Edited:</p>
          <p>{new Date(file._creationTime).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
