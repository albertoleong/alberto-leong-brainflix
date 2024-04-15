import './UploadPage.scss'
import UploadForm from '../../components/Upload/UploadForm'
import { useNavigate } from 'react-router-dom'


const UploadPage = () => {

    const navigate = useNavigate()

    const handleUpload = (event) => {
        event.preventDefault()
        alert("Thank you for your video submission!")
        navigate('/')
    }
    return (
            <UploadForm handleUpload={handleUpload} />
    )
} 
export default UploadPage