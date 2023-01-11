package openapisdk.models.operations;



public class PostPreviewOrderAsynchronouslyResponse {
    public String contentType;
    public PostPreviewOrderAsynchronouslyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPreviewOrderAsynchronouslyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public PostPreviewOrderAsynchronously202ApplicationJson postPreviewOrderAsynchronously202ApplicationJSONObject;
    public PostPreviewOrderAsynchronouslyResponse withPostPreviewOrderAsynchronously202ApplicationJsonObject(PostPreviewOrderAsynchronously202ApplicationJson postPreviewOrderAsynchronously202ApplicationJSONObject) {
        this.postPreviewOrderAsynchronously202ApplicationJSONObject = postPreviewOrderAsynchronously202ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public PostPreviewOrderAsynchronouslyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}