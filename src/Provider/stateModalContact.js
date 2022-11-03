import React from "react";

export const ContextModal = React.createContext()

export const ProviderModal = ({children}) => {
	const [stateModal , setStateModal] = React.useState(false)

	const value = React.useMemo(() => ({
		setStateModal,
		stateModal,
	}))

	return (<ContextModal.Provider value={value}>{children}</ContextModal.Provider>)
}