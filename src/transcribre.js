import { pipeline } from '@xenova/transformers';
import { loadingMessage } from './loading.js';

export async function transcribeAudio() {
  const options = {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: 'portuguese',
    task: 'transcribe',
    return_timestamps: true
  };

  try {
    console.time();
    loadingMessage('Iniciando a transcrição de áudio...');
    console.log('[START_TRANSCRIBE]');

    const transcriber = await pipeline(
      'automatic-speech-recognition',
      'Xenova/whisper-small'
    );

    const response = await fetch('/audio.mp3');
    const audioBlob = await response.blob();

    const result = await transcriber(audioBlob, options);
    return result;

  } catch (error) {
    console.error('[ERROR_TRANSCRIBE]', error);
    throw error;

  } finally {
    console.timeEnd();
    loadingMessage('Transcrição terminada...');
    console.log('[STOP_TRANSCRIBE]');
  }
}
