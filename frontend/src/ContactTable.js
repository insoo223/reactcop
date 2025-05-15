/*
  File: ContactTable.js
  Purpose: To Display contact info as table format.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: 
*/

import React from "react";

const ContactTable = ({ contacts }) => (
  contacts.length > 0 && (
    <div>
      <h3>Displaying Contact List:</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>O_Tel</th>
            <th>Cate</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.o_tel}</td>
              <td>{contact.cate}</td>
              <td>
                {contact.update && !isNaN(new Date(contact.update).getTime())
                  ? new Date(contact.update).toISOString().split("T")[0]
                  : "Invalid date"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
);

export default ContactTable;
