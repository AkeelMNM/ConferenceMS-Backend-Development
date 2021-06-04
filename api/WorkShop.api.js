const { save, getAll, getByUserId, getById, removeById, update} = require('../dal/Workshop.dao');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addWorkShopPaper = async ({userID, presenterName, workShopTitle, email, affiliation,contactNumber,fileLocation}) =>{
    let WorkShop ={
        userID,
        presenterName,
        workShopTitle,
        email,
        affiliation,
        contactNumber,
        submittedDate: new Date().toISOString().slice(0, 10),
        proposalStatus:"pending",
        fileLocation
    }

    return await save(WorkShop);
}

const getAllWorkShop = async () =>{
    return await getAll();
}

const getWorkShopByUserId = async (userID) => {
    return await getByUserId(userID);
}

const getWorkShopById = async (id) => {
    return await getById(id);
}

const updateWorkShop = async (id,{userID, presenterName, workShopTitle, email, affiliation,contactNumber,fileLocation}) =>{
    return await update(id,
        {
            userID,
            presenterName,
            workShopTitle,
            email,
            affiliation,
            contactNumber,
            submittedDate: new Date().toISOString().slice(0, 10),
            proposalStatus:"pending",
            fileLocation
        });
}

const removeWorkShopById = async (id) => {
    return await removeById(id);
}

module.exports = {
    addWorkShopPaper,
    getAllWorkShop,
    getWorkShopByUserId,
    getWorkShopById,
    updateWorkShop,
    removeWorkShopById
};