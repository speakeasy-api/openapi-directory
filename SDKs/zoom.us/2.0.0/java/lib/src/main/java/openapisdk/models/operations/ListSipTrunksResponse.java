package openapisdk.models.operations;



public class ListSipTrunksResponse {
    public byte[] body;
    public ListSipTrunksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListSipTrunksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSipTrunksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListSipTrunks200ApplicationJson listSIPTrunks200ApplicationJSONObject;
    public ListSipTrunksResponse withListSipTrunks200ApplicationJsonObject(ListSipTrunks200ApplicationJson listSIPTrunks200ApplicationJSONObject) {
        this.listSIPTrunks200ApplicationJSONObject = listSIPTrunks200ApplicationJSONObject;
        return this;
    }
}