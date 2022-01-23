import { useEffect } from "react";



const Sumary = () => {

    useEffect(() => {
        const loadCounters = async (): Promise<void> => {
            const response = await fetch(`http://localhost:2047/api/counters`);
            let data;
            try {
                data = await response.json();
            } catch(error) {
                console.error(error);
                data = null;
            }
            
            if (response.ok) {
                console.log('🕹 Counters: ', data);
                
            } else {
                console.error(`API failure: ${response.status}`, data);
            }
        }
        loadCounters();
    }, []);
    return (
        <div>
            Sumary
        </div>
    )
}


export default Sumary;