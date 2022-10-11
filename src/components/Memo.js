import React, {memo} from 'react';

function Memo() {
    console.log('re-render')
    return (
        <h2>HELLO BAE</h2>
    );
}

export default memo(Memo);