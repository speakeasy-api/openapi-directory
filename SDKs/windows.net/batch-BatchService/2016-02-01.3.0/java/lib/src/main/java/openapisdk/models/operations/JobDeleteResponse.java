package openapisdk.models.operations;



public class JobDeleteResponse {
    public Object batchError;
    public JobDeleteResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobDeleteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}