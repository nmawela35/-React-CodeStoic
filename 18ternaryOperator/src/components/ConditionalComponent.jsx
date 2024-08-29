import React from 'react'
import Code from '../components/Code'
import Welcome from '../components/Welcome'

function ConditionalComponent() {

    const display = false;
    return display ? <Welcome/>:<Code/>
}

export default ConditionalComponent