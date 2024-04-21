import './UploadPage.scss'
import UploadForm from '../../components/Upload/UploadForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UploadPage = () => {

    const navigate = useNavigate()
    //const apiUrl = "http://localhost:8080/videos"
    const API_URL = process.env.REACT_APP_API_URL

    const handleUpload = async (event, FormData) => {
        event.preventDefault()

        try {
            const response = axios.post( API_URL, FormData)
            console.log(response.data)
            alert("Thank you for your video submission!")
            navigate('/')

        } catch (error) {
            console.error(error)
        }
    }
    return (
            <UploadForm handleUpload={handleUpload} />
    )
} 
export default UploadPage