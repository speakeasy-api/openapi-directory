package openapisdk.models.operations;



public class JobTerminateResponse {
    public Object batchError;
    public JobTerminateResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobTerminateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobTerminateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobTerminateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}