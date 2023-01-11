package openapisdk.models.operations;



public class ListBlockedListResponse {
    public byte[] body;
    public ListBlockedListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListBlockedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListBlockedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListBlockedList200ApplicationJson listBlockedList200ApplicationJSONObject;
    public ListBlockedListResponse withListBlockedList200ApplicationJsonObject(ListBlockedList200ApplicationJson listBlockedList200ApplicationJSONObject) {
        this.listBlockedList200ApplicationJSONObject = listBlockedList200ApplicationJSONObject;
        return this;
    }
}