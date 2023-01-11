package openapisdk.models.operations;



public class JobEnableResponse {
    public Object batchError;
    public JobEnableResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobEnableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobEnableResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobEnableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}