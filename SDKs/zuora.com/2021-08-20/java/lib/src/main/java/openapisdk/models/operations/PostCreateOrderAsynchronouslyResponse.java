package openapisdk.models.operations;



public class PostCreateOrderAsynchronouslyResponse {
    public String contentType;
    public PostCreateOrderAsynchronouslyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreateOrderAsynchronouslyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public PostCreateOrderAsynchronously202ApplicationJson postCreateOrderAsynchronously202ApplicationJSONObject;
    public PostCreateOrderAsynchronouslyResponse withPostCreateOrderAsynchronously202ApplicationJsonObject(PostCreateOrderAsynchronously202ApplicationJson postCreateOrderAsynchronously202ApplicationJSONObject) {
        this.postCreateOrderAsynchronously202ApplicationJSONObject = postCreateOrderAsynchronously202ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public PostCreateOrderAsynchronouslyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}