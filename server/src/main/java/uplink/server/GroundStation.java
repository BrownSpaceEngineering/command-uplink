package uplink.server;

import java.math.RoundingMode;
import java.text.DecimalFormat;

public class GroundStation {
	
	private int _id;
	private String _location;
	private String _url;
	private String _metadata;

	
	public GroundStation(int id, String location, String url) {
		_id = id;
		_location = location;
		_url = url;
		
		DecimalFormat df = new DecimalFormat("#.####");
		df.setRoundingMode(RoundingMode.CEILING);
		
		_metadata = df.format(Math.random() * 100 + 1);
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
