package openapisdk.models.operations;



public class AddBatchWebinarRegistrantsResponse {
    public byte[] body;
    public AddBatchWebinarRegistrantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddBatchWebinarRegistrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddBatchWebinarRegistrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddBatchWebinarRegistrants200ApplicationJson addBatchWebinarRegistrants200ApplicationJSONObject;
    public AddBatchWebinarRegistrantsResponse withAddBatchWebinarRegistrants200ApplicationJsonObject(AddBatchWebinarRegistrants200ApplicationJson addBatchWebinarRegistrants200ApplicationJSONObject) {
        this.addBatchWebinarRegistrants200ApplicationJSONObject = addBatchWebinarRegistrants200ApplicationJSONObject;
        return this;
    }
}