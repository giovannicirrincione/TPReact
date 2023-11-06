import { Alert } from "react-bootstrap";

type AlertGeneratorProps = {
    message:string;
}

const AlertGenerator: React.FC<AlertGeneratorProps> = ({ message }) => {
    return(
    <Alert variant="sucess" className="mt-2 w-25">
        <Alert.Heading>MensajeRecibido</Alert.Heading>
        <p>
            {message}
        </p>
    </Alert>
    )
}
export default AlertGenerator;