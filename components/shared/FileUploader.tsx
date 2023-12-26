import React, { SetStateAction } from "react";
type FileUploadProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiels: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploadProps) => {
  return <div>FileUploader</div>;
};

export default FileUploader;
