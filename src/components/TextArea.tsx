import React from 'react'
import { T } from './styles/TextArea'

interface TextAreaProps {
    rows: number,
    column: number
}



const TextArea: React.FC = () => {
    
    return (
    <T.Body>
        <T.TextArea 
            rows={45} cols={100}>
            
        </T.TextArea>

    </T.Body>
    );
}

export default TextArea;