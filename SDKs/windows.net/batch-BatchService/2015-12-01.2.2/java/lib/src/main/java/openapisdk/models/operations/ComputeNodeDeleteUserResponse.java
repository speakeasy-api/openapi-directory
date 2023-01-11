package openapisdk.models.operations;



public class ComputeNodeDeleteUserResponse {
    public Object batchError;
    public ComputeNodeDeleteUserResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ComputeNodeDeleteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeDeleteUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeDeleteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}