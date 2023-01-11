package openapisdk.models.operations;



public class ListSipPhonesResponse {
    public byte[] body;
    public ListSipPhonesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListSipPhonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSipPhonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListSipPhones200ApplicationJson listSipPhones200ApplicationJSONObject;
    public ListSipPhonesResponse withListSipPhones200ApplicationJsonObject(ListSipPhones200ApplicationJson listSipPhones200ApplicationJSONObject) {
        this.listSipPhones200ApplicationJSONObject = listSipPhones200ApplicationJSONObject;
        return this;
    }
}