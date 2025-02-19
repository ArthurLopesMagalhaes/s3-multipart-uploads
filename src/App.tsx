import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Toaster } from './components/Toaster';
import { mbToBytes } from './lib/utils';
import { initiateMPU } from './services/initiateMPU';


export function App() {
	const [file, setFile] = useState<File>();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!file) {
			return;
		}

		const chunkSizes = mbToBytes(5);
		const totalChunks = Math.ceil(file.size / chunkSizes);

		const {key, parts, uploadId} = await initiateMPU({fileName: file.name, totalChunks});

		console.log(key, parts, uploadId);

		toast.error('Ocorreu um erro ao fazer o upload do arquivo!');
	}


	return (
		<>
			<Toaster />

			<div className="w-full min-h-screen grid place-items-center">
				<div className="w-full max-w-lg">
					<h1 className="text-4xl font-semibold tracking-tighter mb-10">
            Selecione um arquivo
					</h1>

					<form className="space-y-4" onSubmit={handleSubmit}>
						<Input
							type="file"
							onChange={event => setFile(event.target.files?.[0])}
						/>

						<Button
							type="submit"
							className="w-full"
							disabled={!file}
						>
              Enviar
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}
