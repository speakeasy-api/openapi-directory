package openapisdk.models.operations;



public class JobAddResponse {
    public Object batchError;
    public JobAddResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}