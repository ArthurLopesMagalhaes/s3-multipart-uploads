import axios from 'axios';

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
	const url = 'https://fc73ecpenaiagjd4pkglmo6e4a0ktgxt.lambda-url.us-east-1.on.aws/';

	const {data} = await axios.post<InitiateMPUResponse>(url, {
		fileName,
		totalChunks
	});

	return data;
}
