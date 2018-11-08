package uplink.db;

public class User {

    public String id;

    public String firstName;
    public String lastName;

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "{id : %s, firstName : '%s', lastName : '%s'}",
                id, firstName, lastName);
    }

}
