package openapisdk.models.operations;



public class JobDisableResponse {
    public Object batchError;
    public JobDisableResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobDisableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobDisableResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobDisableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}