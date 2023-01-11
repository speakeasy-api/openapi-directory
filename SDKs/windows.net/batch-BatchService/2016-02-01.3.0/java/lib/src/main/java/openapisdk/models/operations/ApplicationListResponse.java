package openapisdk.models.operations;



public class ApplicationListResponse {
    public Object applicationListResult;
    public ApplicationListResponse withApplicationListResult(Object applicationListResult) {
        this.applicationListResult = applicationListResult;
        return this;
    }
    public Object batchError;
    public ApplicationListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ApplicationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ApplicationListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ApplicationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}