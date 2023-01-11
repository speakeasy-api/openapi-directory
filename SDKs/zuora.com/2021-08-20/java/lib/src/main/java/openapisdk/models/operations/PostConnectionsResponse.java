package openapisdk.models.operations;



public class PostConnectionsResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PostConnectionsResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PostConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostConnectionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}