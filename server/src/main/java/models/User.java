package models;

import org.bson.Document;

public class User {

    private String firstName;
    private String lastName;

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

	@Override
    public String toString() {
        return String.format(
                "{firstName : '%s', lastName : '%s'}",
                firstName, lastName);
    }

	public Document toDoc() {

	    Document doc = new Document();
	    doc.put("FirstName",firstName);
	    doc.put("LastName",lastName);
	    return doc;
	    
	}

}
