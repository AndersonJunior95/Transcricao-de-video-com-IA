import axios from "axios"
import { startLoading, stopLoading, loadingMessage } from "./loading"
import { getVideoId, loadVideo } from "./youtube-api"
import { transcribeAudio } from './transcribre'
import { renderText } from './render'

const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        loadingMessage('Iniciando a aplicação')
        startLoading()

        const formData = new FormData(form)
        const url = formData.get('url')
        await loadVideo(url)

        loadingMessage('Baixando e convertendo o vídeo')
        await axios.get('http://localhost:3333/audio?v=' + getVideoId(url))

        const result = await transcribeAudio()
        renderText(data)
        console.log('[TRANSCRIÇÃO FINALIZADA]', result.text)
    } catch (error) {
        console.log('[SUBMIT_ERROR]', error)
    } finally {
        stopLoading()
    }
})
