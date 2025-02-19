import axios from 'axios';
const VITE_LAMBDA_FUNCTION_URL = import.meta.env.VITE_LAMBDA_FUNCTION_URL;

type InitiateMPUParams = {
  fileName: string;
  totalChunks: number;
}

type InitiateMPUResponse = {
  key: string;
  uploadId: string;
  parts: {
    url: string;
    partNumber: number;
  }
}

export async function initiateMPU({fileName, totalChunks}: InitiateMPUParams) {
	const url = VITE_LAMBDA_FUNCTION_URL;

	const {data} = await axios.post<InitiateMPUResponse>(url, {
		fileName,
		totalChunks
	});

	return data;
}
