package openapisdk.models.operations;



public class PostDebitMemoCollectResponse {
    public String contentType;
    public PostDebitMemoCollectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDebitMemoCollectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public PostDebitMemoCollect200ApplicationJson postDebitMemoCollect200ApplicationJSONObject;
    public PostDebitMemoCollectResponse withPostDebitMemoCollect200ApplicationJsonObject(PostDebitMemoCollect200ApplicationJson postDebitMemoCollect200ApplicationJSONObject) {
        this.postDebitMemoCollect200ApplicationJSONObject = postDebitMemoCollect200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public PostDebitMemoCollectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}