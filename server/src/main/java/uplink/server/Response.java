package uplink.server;

public class Response {

    private String _content;

    public Response() {
    }

    public Response(String content) {
        this._content = content;
    }

    public String getContent() {
        return _content;
    }

}
