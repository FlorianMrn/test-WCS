import axios from 'axios';

const API_URL = "/argonautes";

const createArgonaute = async (argonaute) => {
    const { data : newArgonaute } = await axios.post(API_URL, {
        argonaute,
    })
    return newArgonaute
};

const getAllArgonautes = async () => {
    const { data : argonautes } = await axios.get(API_URL)

    return argonautes
};

export default { createArgonaute, getAllArgonautes }; 