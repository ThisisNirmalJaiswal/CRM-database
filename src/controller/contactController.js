const contactModel = require("../models/contactModel");
const axios = require('axios');


// const apiKey


const createContact = async (req, res) => {
    try {
        let data = req.body;
        let result;
        await axios.post(`https:functionup-545454068121949398.myfreshworks.com/crm/sales/api/contacts`, data, {
            method: "POST",
            headers: {
                Authorization: `Token token=lMBGvGarLid6gRm-br-7mw`,
                'Content-Type': "application/json"
            }
        })
        .then(response =>{result = response.data})
        .catch(err => console.log(err))

        return res.status(200).send({ status: true, message: "Success", data: result })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const getContact = async (req, res) => {
    try {
        let data = req.body;
        let result;
        await axios.get(`https:functionup-545454068121949398.myfreshworks.com/crm/sales/api/contacts/${data.contact_id  }`, {
            headers: {
                Authorization: `Token token=lMBGvGarLid6gRm-br-7mw`,
                'Content-Type': "application/json"
            }
        })
        .then(response=>{result = response.data})
        .catch(err => console.log(err));
    
        return res.status(200).send({ status: true, message: "Success", data: result })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}


const updateContact = async (req, res) => {
    try {
        let data = req.body;
        let result;
        await axios.put(`https:functionup-545454068121949398.myfreshworks.com/crm/sales/api/contacts/${data.id}`, data, {
            headers: {
                Authorization: `Token token=lMBGvGarLid6gRm-br-7mw`,
                'Content-Type': "application/json"
            }
        })
            .then(response =>{ result = response.data})
            .catch(error => console.log(error))

        return res.status(200).send({ status: true, message: "Success", data: result })
    } catch (err) {
        return res.status(500).send({ status: false, Error: err.message });
    }
}

const deleteContact = async (req, res) => {
    try {
        let data = req.body;
        await axios.delete(`https:functionup-545454068121949398.myfreshworks.com/crm/sales/api/contacts/${data.contact_id}`, {
            headers: {
                Authorization: `Token token=lMBGvGarLid6gRm-br-7mw`,
                'Content-Type': "application/json"
            }
        })
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

        return res.status(200).send({ status: true, message: "contact deleted successfully"});
    } catch (err) {
        return res.status(500).send({ status: false, Error: err.message });
    }
}

module.exports = { createContact, getContact, updateContact, deleteContact };