"use client";

import React, { useContext, useEffect, useState } from "react";
import { FileListContext } from "@/app/_context/FilesListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import moment from "moment";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Archive, MoreHorizontal } from "lucide-react";
import { FileActionDropdown } from "./FileActionDropdown";

export interface FILE {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
  sharedWith?: string[];
}

const FileList = () => {
  const { fileList_: initialFileList } = useContext(FileListContext);
  const [fileList, setFileList] = useState<FILE[]>([]);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (initialFileList) setFileList(initialFileList);
  }, [initialFileList]);

  // Update file in local state
  const handleFileUpdate = (updatedFile: FILE) => {
    setFileList(fileList.map(f => f._id === updatedFile._id ? updatedFile : f));
  };

  // Remove file from local state after deletion
  const handleFileDelete = (fileId: string) => {
    setFileList(fileList.filter(f => f._id !== fileId));
  };

  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileList.map((file) => (
              <tr key={file._id} className="odd:bg-gray-50 cursor-pointer">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{file.fileName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format("DD MMM YYYY")}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format("DD MMM YYYY")}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user && (
                    <Image
                      src={user.picture}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <FileActionDropdown
                    file={file}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
