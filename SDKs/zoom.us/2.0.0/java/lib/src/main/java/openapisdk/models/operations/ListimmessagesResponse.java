package openapisdk.models.operations;



public class ListimmessagesResponse {
    public byte[] body;
    public ListimmessagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListimmessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListimmessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Listimmessages200ApplicationJson listimmessages200ApplicationJSONObject;
    public ListimmessagesResponse withListimmessages200ApplicationJsonObject(Listimmessages200ApplicationJson listimmessages200ApplicationJSONObject) {
        this.listimmessages200ApplicationJSONObject = listimmessages200ApplicationJSONObject;
        return this;
    }
}