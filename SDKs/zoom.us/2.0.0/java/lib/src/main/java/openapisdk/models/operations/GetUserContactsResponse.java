package openapisdk.models.operations;



public class GetUserContactsResponse {
    public byte[] body;
    public GetUserContactsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUserContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserContacts200ApplicationJson getUserContacts200ApplicationJSONObject;
    public GetUserContactsResponse withGetUserContacts200ApplicationJsonObject(GetUserContacts200ApplicationJson getUserContacts200ApplicationJSONObject) {
        this.getUserContacts200ApplicationJSONObject = getUserContacts200ApplicationJSONObject;
        return this;
    }
}