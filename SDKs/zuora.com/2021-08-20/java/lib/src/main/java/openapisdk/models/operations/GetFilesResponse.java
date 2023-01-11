package openapisdk.models.operations;



public class GetFilesResponse {
    public String contentType;
    public GetFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}