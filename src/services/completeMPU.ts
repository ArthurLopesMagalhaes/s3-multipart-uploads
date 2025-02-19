import axios from 'axios';

type CompleteMPUParams = {
  fileKey: string;
  uploadId: string;
  parts: {
    partNumber: number;
    entityTag: string
  }[];
}

export async function completeMPU({ fileKey, uploadId, parts }: CompleteMPUParams) {
	const url = import.meta.env.VITE_COMPLETE_MPU_LAMBDA_FUNCTION_URL;

	await axios.post(url, {
		fileKey,
		uploadId,
		parts
	});
}
