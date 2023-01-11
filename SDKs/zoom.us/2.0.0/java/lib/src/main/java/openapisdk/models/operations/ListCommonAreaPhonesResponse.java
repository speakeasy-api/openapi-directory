package openapisdk.models.operations;



public class ListCommonAreaPhonesResponse {
    public byte[] body;
    public ListCommonAreaPhonesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListCommonAreaPhonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCommonAreaPhonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCommonAreaPhones200ApplicationJson listCommonAreaPhones200ApplicationJSONObject;
    public ListCommonAreaPhonesResponse withListCommonAreaPhones200ApplicationJsonObject(ListCommonAreaPhones200ApplicationJson listCommonAreaPhones200ApplicationJSONObject) {
        this.listCommonAreaPhones200ApplicationJSONObject = listCommonAreaPhones200ApplicationJSONObject;
        return this;
    }
}