package openapisdk.models.operations;



public class ListInternalNumbersResponse {
    public byte[] body;
    public ListInternalNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListInternalNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListInternalNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListInternalNumbers200ApplicationJson listInternalNumbers200ApplicationJSONObject;
    public ListInternalNumbersResponse withListInternalNumbers200ApplicationJsonObject(ListInternalNumbers200ApplicationJson listInternalNumbers200ApplicationJSONObject) {
        this.listInternalNumbers200ApplicationJSONObject = listInternalNumbers200ApplicationJSONObject;
        return this;
    }
}