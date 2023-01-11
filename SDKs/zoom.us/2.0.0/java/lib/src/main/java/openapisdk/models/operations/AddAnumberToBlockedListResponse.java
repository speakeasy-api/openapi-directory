package openapisdk.models.operations;



public class AddAnumberToBlockedListResponse {
    public byte[] body;
    public AddAnumberToBlockedListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddAnumberToBlockedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddAnumberToBlockedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddAnumberToBlockedList201ApplicationJson addAnumberToBlockedList201ApplicationJSONObject;
    public AddAnumberToBlockedListResponse withAddAnumberToBlockedList201ApplicationJsonObject(AddAnumberToBlockedList201ApplicationJson addAnumberToBlockedList201ApplicationJSONObject) {
        this.addAnumberToBlockedList201ApplicationJSONObject = addAnumberToBlockedList201ApplicationJSONObject;
        return this;
    }
}