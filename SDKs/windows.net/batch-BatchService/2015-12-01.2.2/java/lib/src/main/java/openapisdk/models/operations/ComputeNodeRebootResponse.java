package openapisdk.models.operations;



public class ComputeNodeRebootResponse {
    public Object batchError;
    public ComputeNodeRebootResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ComputeNodeRebootResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeRebootResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeRebootResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}