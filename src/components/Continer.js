import { Container as ContinerContent } from "semantic-ui-react"


export default function Continer({children}) {
    return(
        <ContinerContent text>{children}</ContinerContent>
    )
};

