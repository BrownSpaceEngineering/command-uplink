package uplink.db;

import java.util.List;

public class utils {

	public utils() {
	}
	
	public static String renderUserList(List<User> users) {
		String output = "";
		
		for (User u : users) {
			output.concat(u.toString());
		}
		
		return output;
	}

}
