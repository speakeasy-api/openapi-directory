package openapisdk.models.operations;



public class CreateCallQueueResponse {
    public byte[] body;
    public CreateCallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateCallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateCallQueue201ApplicationJson createCallQueue201ApplicationJSONObject;
    public CreateCallQueueResponse withCreateCallQueue201ApplicationJsonObject(CreateCallQueue201ApplicationJson createCallQueue201ApplicationJSONObject) {
        this.createCallQueue201ApplicationJSONObject = createCallQueue201ApplicationJSONObject;
        return this;
    }
}