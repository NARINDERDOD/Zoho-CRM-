Contacts = zoho.crm.getRecordById("Vendors",Vendors_id);
info Contacts;
billing_address = Map();
billing_address.put("address",Contacts.get("Mailing_Street"));
billing_address.put("city",Contacts.get("Mailing_City"));
billing_address.put("street2",Contacts.get("Other_Street"));
billing_address.put("state",Contacts.get("Mailing_State"));
billing_address.put("zip",Contacts.get("Mailing_Zip"));
billing_address.put("country",Contacts.get("Mailing_Country"));
contact_persons = Map();
contact_persons.put("email",Contacts.get("Email"));
contactPersons = list();
contactPersons.add(contact_persons);
contacts_map = Map();
contacts_map.put("contact_name",Contacts.get("Vendor_Name"));


// contact_type   if contact_type is vendor  then create vendor  if contact_type is customers the create customer
contacts_map.put("contact_type","vendor");
companyName = Contacts.getJSON("Account_Name");
contacts_map.put("billing_address",billing_address);
contacts_map.put("contact_persons",contactPersons);
response = invokeurl
[
	url :"https://www.zohoapis.in/books/v3/contacts?organization_id=60026385384"
	type :POST
	parameters:contacts_map.toString()
	connection:"conn_books"
];
info response;
