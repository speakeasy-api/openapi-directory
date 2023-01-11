package openapisdk.models.operations;



public class ListPhoneUsersResponse {
    public byte[] body;
    public ListPhoneUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPhoneUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPhoneUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPhoneUsers200ApplicationJson listPhoneUsers200ApplicationJSONObject;
    public ListPhoneUsersResponse withListPhoneUsers200ApplicationJsonObject(ListPhoneUsers200ApplicationJson listPhoneUsers200ApplicationJSONObject) {
        this.listPhoneUsers200ApplicationJSONObject = listPhoneUsers200ApplicationJSONObject;
        return this;
    }
}