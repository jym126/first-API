const myContacts = require('../models/contacts');

//home route
const home = (req, res) => {
    res.send('I love you Marlen');
}

const oneContact = async(req, res) => {
    const id = req.params['id'];
    const myContact = await myContacts.findOne({_id : id});

    res.send(
        `<table>
        <tr>
        <th>Contact information</th>
        </tr>
        <tr>
        <td>${myContact.firstName}</td>
        <td>${myContact.lastName} -</td>
        <td>${myContact.email} -</td>
        <td>${myContact.favoriteColor} -</td>
        <td>${myContact.birthday}</td>
        </tr>
    </table>`
    )
}

const contacts = async(req, res) => {

    const allContacts = await myContacts.find({});

    let elements = '';
    const head =
    `<table>
    <tr>
    <th>All contacts information:</th>
    </tr>
    </table>`;
    for (const file of allContacts){
        elements += 
        `<table>
            <tr>
            <td>${file.firstName}</td>
            <td>${file.lastName} -</td>
            <td>${file.email} -</td>
            <td>${file.favoriteColor} -</td>
            <td>${file.birthday}</td>
            </tr>
        </table>`
    }
    res.send(head + elements);
}


module.exports = {
    home, oneContact, contacts
}