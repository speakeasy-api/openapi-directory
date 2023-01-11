package openapisdk.models.operations;



public class ComputeNodeListResponse {
    public Object batchError;
    public ComputeNodeListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object computeNodeListResult;
    public ComputeNodeListResponse withComputeNodeListResult(Object computeNodeListResult) {
        this.computeNodeListResult = computeNodeListResult;
        return this;
    }
    public String contentType;
    public ComputeNodeListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}