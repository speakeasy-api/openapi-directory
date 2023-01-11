package openapisdk.models.operations;



public class ListPastWebinarFilesResponse {
    public byte[] body;
    public ListPastWebinarFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPastWebinarFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPastWebinarFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPastWebinarFiles200ApplicationJson listPastWebinarFiles200ApplicationJSONObject;
    public ListPastWebinarFilesResponse withListPastWebinarFiles200ApplicationJsonObject(ListPastWebinarFiles200ApplicationJson listPastWebinarFiles200ApplicationJSONObject) {
        this.listPastWebinarFiles200ApplicationJSONObject = listPastWebinarFiles200ApplicationJSONObject;
        return this;
    }
}