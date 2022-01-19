import React, {Fragment} from 'react'

const Input = ({label, ...props}) => {
    return (

       <Fragment>
           {label && <label class="form-label">{label}</label>}
            <input className='form-control' {...props} />
       </Fragment>
    )
}

export default Input