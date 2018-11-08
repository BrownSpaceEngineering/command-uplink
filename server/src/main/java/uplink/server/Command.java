package uplink.server;

public class Command {
	
	private String _text;
	private String _id;
	private int _timestamp;
	private String _response;
	
	public Command() {
		_text = "";
		_id = "";
		_timestamp = 0;
		_response = "";
	}
	
	public String getText() {
		return _text;
	}
	
	public String getId() {
		return _id;
	}
	
	public int getTimestamp() {
		return _timestamp;
	}
	
	public String getResponse() {
		return _response;
	}

}
