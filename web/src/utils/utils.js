const createAction = (type, payload = undefined) => {
    if(!type) {
        throw new TypeError(`Valid action type required. Got ${type}`);
    }
    return {type, payload};
};

export {
    createAction
}