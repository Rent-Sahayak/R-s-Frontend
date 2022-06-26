import { useState } from "react"

export const Input = (props) =>{

    const {error, type, ...remainingProps} = props

    const [passwordVisible, setPasswordVisible] = useState(false)

    return(
        <div>
            <div style={{position: 'relative'}}>
                <input type={type !== 'password' ? type : passwordVisible ? 'text' : type } {...remainingProps} />
                {type === 'password' && (
                    <span style={{position: 'absolute', right: '5px', top: '5px'}} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? 'O' : 'C'}</span>
                )}
            </div>
            {error && <span className="input-error">{error}</span>}
        </div>
    )
}