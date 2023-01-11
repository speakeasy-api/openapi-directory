package openapisdk.models.operations;



public class PostPreviewOrderResponse {
    public String contentType;
    public PostPreviewOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPreviewOrderResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostOrderPreviewResponseType postOrderPreviewResponseType;
    public PostPreviewOrderResponse withPostOrderPreviewResponseType(openapisdk.models.shared.PostOrderPreviewResponseType postOrderPreviewResponseType) {
        this.postOrderPreviewResponseType = postOrderPreviewResponseType;
        return this;
    }
    public Long statusCode;
    public PostPreviewOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}