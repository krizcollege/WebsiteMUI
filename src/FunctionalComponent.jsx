import { useEffect } from "react"

function FunctionalComponent() {

    useEffect(() => {
        let flag = true;
        console.log("Mounted")

        const fn = () => {
            if (flag == true) {
                console.log("Unmounted")
                flag = false;
            }
        }

        fn()
    }, [])

    return (
        <div><h3>Functional Component</h3></div>
    )
}

export default FunctionalComponent
