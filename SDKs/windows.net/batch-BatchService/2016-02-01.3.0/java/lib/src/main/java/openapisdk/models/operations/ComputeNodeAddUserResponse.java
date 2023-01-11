package openapisdk.models.operations;



public class ComputeNodeAddUserResponse {
    public Object batchError;
    public ComputeNodeAddUserResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ComputeNodeAddUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeAddUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeAddUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}