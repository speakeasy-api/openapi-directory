package openapisdk.models.operations;



public class ListPastWebinarQaResponse {
    public byte[] body;
    public ListPastWebinarQaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPastWebinarQaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPastWebinarQaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPastWebinarQa200ApplicationJson listPastWebinarQA200ApplicationJSONObject;
    public ListPastWebinarQaResponse withListPastWebinarQa200ApplicationJsonObject(ListPastWebinarQa200ApplicationJson listPastWebinarQA200ApplicationJSONObject) {
        this.listPastWebinarQA200ApplicationJSONObject = listPastWebinarQA200ApplicationJSONObject;
        return this;
    }
}