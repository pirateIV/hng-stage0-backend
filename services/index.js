const endpoint = "https://catfact.ninja/fact";

export const fetchCatFact = async () => {
	try {
		const response = await fetch(endpoint, {
			signal: AbortSignal.timeout(5000),
		});
		const data = await response.json();
		return data.fact;
	} catch (error) {
		console.error("Error fetching cat fact", error.message);
		// Fallback response in request timeout
		return "Could not fetch a cat fact at this time";
	}
};
