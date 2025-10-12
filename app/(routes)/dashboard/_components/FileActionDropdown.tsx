"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FileDetails } from "./FileDetails";

interface FileActionDropdownProps {
  file: any;
}

export const FileActionDropdown = ({ file }: FileActionDropdownProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState<string | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setAction(null);
  };

  const renderDialogContent = () => {
    if (!action) return null;

    return (
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>{action.charAt(0).toUpperCase() + action.slice(1)}</DialogTitle>
          {action === "details" && <FileDetails file={file} />}
        </DialogHeader>
      </DialogContent>
    );
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
          <Image src="/assets/icons/dots.svg" alt="dots" width={24} height={24} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{file.fileName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              setAction("details");
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2"
          >
            <Image src="/assets/icons/info.svg" alt="Details" width={20} height={20} />
            Details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {renderDialogContent()}
    </Dialog>
  );
};
