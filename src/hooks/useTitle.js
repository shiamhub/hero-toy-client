import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Here Toy | ${title}`
    }, [title])
}

export default useTitle