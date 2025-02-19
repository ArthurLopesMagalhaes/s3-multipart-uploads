import axios from "axios";

type InitiateMPUParams = {
  fileName: string;
  totalChunks: number;
};

type InitiateMPUResponse = {
  key: string;
  uploadId: string;
  parts: {
    url: string;
    partNumber: number;
  }[];
};

export async function initiateMPU({
  fileName,
  totalChunks,
}: InitiateMPUParams) {
  const url = import.meta.env.VITE_LAMBDA_FUNCTION_URL;

  const { data } = await axios.post<InitiateMPUResponse>(url, {
    fileName,
    totalChunks,
  });

  return data;
}
