package openapisdk.models.operations;



public class ComputeNodeGetResponse {
    public Object batchError;
    public ComputeNodeGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object computeNode;
    public ComputeNodeGetResponse withComputeNode(Object computeNode) {
        this.computeNode = computeNode;
        return this;
    }
    public String contentType;
    public ComputeNodeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}