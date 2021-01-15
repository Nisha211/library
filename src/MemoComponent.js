import React from 'react'

 function MemoComponent({count}){
    console.log("this is my memo component page")
    return(
        <div>
            props value is received {count}
        </div>
    )
}

export default React.memo(MemoComponent)