import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalStore({ children }) {
    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnabledFlags] = useState({})
    const [error, setError] = useState(null)


    async function fetchFeatureFlags() {
        try {
            setLoading(true)
            const response = await featureFlagDataServiceCall();
            console.log(response)
            setEnabledFlags(response)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false)
            throw new Error(error)
        }
    }

    useEffect(() => {
       fetchFeatureFlags()
    }, [])
    
    return (
        <FeatureFlagsContext.Provider value={{enabledFlags, loading}}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}