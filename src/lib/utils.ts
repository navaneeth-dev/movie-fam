export const serializeNonPOJOs = <T>(obj: T) => {
	return structuredClone(obj);
};
