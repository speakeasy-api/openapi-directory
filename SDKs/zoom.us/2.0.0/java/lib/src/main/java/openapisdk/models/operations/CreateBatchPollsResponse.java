package openapisdk.models.operations;



public class CreateBatchPollsResponse {
    public byte[] body;
    public CreateBatchPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateBatchPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBatchPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateBatchPolls201ApplicationJson createBatchPolls201ApplicationJSONObject;
    public CreateBatchPollsResponse withCreateBatchPolls201ApplicationJsonObject(CreateBatchPolls201ApplicationJson createBatchPolls201ApplicationJSONObject) {
        this.createBatchPolls201ApplicationJSONObject = createBatchPolls201ApplicationJSONObject;
        return this;
    }
}