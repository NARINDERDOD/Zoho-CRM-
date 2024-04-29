Deal_detail = zoho.crm.getRecordById("Deals",id);

first_portal_id = zoho.projects.getPortals().get("onlynavi2");

info first_portal_id ;

// info Deal_detail ;
deal_name = Deal_detail.get("Deal_Name");

new_project = Map();
new_project.put("name",deal_name);
new_project.put("description", "Subtask 4 description");


 // onlynavi2 is a portal name which created in zoho projects's settings portal module
 response = zoho.projects.createProject("onlynavi2",new_project.tostring(),"conn_projects");
 info response;

