package openapisdk.models.operations;



public class PostEntityConnectionsResponse {
    public String contentType;
    public PostEntityConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostEntityConnectionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostEntityConnectionsResponseType postEntityConnectionsResponseType;
    public PostEntityConnectionsResponse withPostEntityConnectionsResponseType(openapisdk.models.shared.PostEntityConnectionsResponseType postEntityConnectionsResponseType) {
        this.postEntityConnectionsResponseType = postEntityConnectionsResponseType;
        return this;
    }
    public Long statusCode;
    public PostEntityConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}