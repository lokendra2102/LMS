import React from 'react'
import { Container } from 'react-bootstrap'

function ClipBoard({name, code, toast, setMessage}) {

    const handleCopy = () => {
        navigator.permissions.query({name: "clipboard-write"}).then((permission) => {
            if (permission.state === "granted" || permission.state === "prompt") {
                navigator.clipboard.writeText(code).then((data) => {
                    setMessage({
                        "variant" : "dark",
                        "message" : "Code Copied Successfully"
                    })
                    toast(true)
                }).catch((err) => {
                    setMessage({
                        "variant" : "danger",
                        "message" : "Code Copied Failed. Please check if browser supports copying content."
                    })
                    toast(true)
                })
            }
            else {
                const copyCode = document.querySelector(".text-hide");
                copyCode.value = code;
                copyCode.select();
                document.execCommand("copy")
                setMessage({
                    "variant" : "dark",
                    "message" : "Code Copied Successfully"
                })
                toast(true)
            }
        });
    }

    return (
        <Container fluid className="code-container mt-4 rounded px-0">
            <Container fluid className="d-flex justify-content-between align-items-center code-header py-2 rounded-top-2">
                <p className="flex-1 fs-5 fw-medium mb-0 clipboard-name">{name}</p>
                <p className="copy-icon mb-0 d-flex justify-content-center align-items-center" onClick={handleCopy}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                </p>
            </Container>
            <Container fluid className='code-snippet rounded-bottom-2'>
                <pre className="py-3 rounded w-100 overflow-x-scroll code-snippet-code">
                    <code className='' dangerouslySetInnerHTML={{__html: code}}></code>
                </pre>
            </Container>
            <input className='d-none text-hide'></input>
        </Container>
    )
}

export default ClipBoard