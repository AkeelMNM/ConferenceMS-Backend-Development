const {save, getAll, getById, removeById, update} = require('../dal/AttendeesPayment.dao');

const createAttendeesPayment = async (name, email, payment, ticketID ) =>{
    let payments = {
        name,
        email,
        payment,
        PayDate: new Date().toISOString().slice(0, 10),
        ticketID
    }
    return await save(payments);
};

const getAllPayment = async () => {
    return await getAll();
};

const getPaymentById = async (id) => {
    return await getById(id);
};

const deletePayment = async(id) =>{
    return await removeById(id);
};

const UpdateAttendeesPayment = async (id, {name, email, payment, ticketID}) =>{
    let payments = {
        name,
        email,
        payment,
        PayDate: new Date().toISOString().slice(0, 10),
        ticketID
    }
    return await update(id,payments);
};

module.exports = {
    createAttendeesPayment,
    getAllPayment,
    getPaymentById,
    deletePayment,
    UpdateAttendeesPayment
};