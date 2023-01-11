package openapisdk.models.operations;



public class GetHostedPagesResponse {
    public String contentType;
    public GetHostedPagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHostedPagesType getHostedPagesType;
    public GetHostedPagesResponse withGetHostedPagesType(openapisdk.models.shared.GetHostedPagesType getHostedPagesType) {
        this.getHostedPagesType = getHostedPagesType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetHostedPagesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetHostedPagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}