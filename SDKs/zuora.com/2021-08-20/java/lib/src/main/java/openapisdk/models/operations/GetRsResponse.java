package openapisdk.models.operations;



public class GetRsResponse {
    public String contentType;
    public GetRsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getrsDetailType;
    public GetRsResponse withGetrsDetailType(java.util.Map<String, Object> getrsDetailType) {
        this.getrsDetailType = getrsDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}