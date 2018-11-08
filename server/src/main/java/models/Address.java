package models;

public class Address {

    public String street;
    public String city;
    public String state;
    public String zip;

    public Address(String street, String city, String state, String zip) {
    	this.street = street;
    	this.city = city;
    	this.state = state;
    	this.zip = zip;
}

    @Override
    public String toString() {
        return String.format(
                "{street : %s, city : %s, state : %s, zip : %s}",
                street, city, state, zip);
    }

}
