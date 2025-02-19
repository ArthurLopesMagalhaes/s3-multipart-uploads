import axios from "axios";

type AbortMPUParams = {
  fileKey: string;
  uploadId: string;
};
export async function abortMPU({ fileKey, uploadId }: AbortMPUParams) {
  const url = import.meta.env.VITE_LAMBDA_FUNCTION_URL;

  await axios.delete(url, {
    data: {
      fileKey,
      uploadId,
    },
  });
}
