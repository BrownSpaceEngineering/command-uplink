package uplink.server;

public class GroundStation {
	
	private int _id;
	private String _location;
	private String _url;
	
	public GroundStation(int id, String location, String url) {
		_id = id;
		_location = location;
		_url = url;
	}
	
	public int getId() {
		return _id;
	}
	
	public String getLocation() {
		return _location;
	}
	
	public String getUrl() {
		return _url;
	}
	
}
