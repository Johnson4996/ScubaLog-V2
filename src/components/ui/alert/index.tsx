
import { Alert,AlertDescription } from "../alert"
type AlertProps = {
    children: React.ReactNode
}

const AlertError = ({children}: AlertProps) => {
    return(
        <Alert variant="destructive">
            <AlertDescription className="text-xsm">
                 {children}
            </AlertDescription>
      </Alert>
    )
}

export {AlertError}