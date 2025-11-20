Timer - React

    const [count, setCount] = useState(0);
    //state

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])