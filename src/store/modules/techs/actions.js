export const addTech = (tech) => {
    return {
        type: 'ADD_TECH',
        payload: { tech }
    };
};
