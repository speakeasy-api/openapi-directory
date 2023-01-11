package openapisdk.models.operations;



public class PostBillingPreviewRunResponse {
    public String contentType;
    public PostBillingPreviewRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostBillingPreviewRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public PostBillingPreviewRun200ApplicationJson postBillingPreviewRun200ApplicationJSONObject;
    public PostBillingPreviewRunResponse withPostBillingPreviewRun200ApplicationJsonObject(PostBillingPreviewRun200ApplicationJson postBillingPreviewRun200ApplicationJSONObject) {
        this.postBillingPreviewRun200ApplicationJSONObject = postBillingPreviewRun200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public PostBillingPreviewRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}