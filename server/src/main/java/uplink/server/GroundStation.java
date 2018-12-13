package uplink.server;

public class GroundStation {
	
	private int _id;
	private String _location;
	private String _url;
	private double _metadata;
	
	public GroundStation(int id, String location, String url) {
		_id = id;
		_location = location;
		_url = url;
		_metadata = Math.random() * 100 + 1;

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
	
	public String getStatus() {
		return String.format("{ ID: %s, Location: %s, URL: %s, Metadata: %s }", _id, _location, _url, _metadata);
	}
	
}
