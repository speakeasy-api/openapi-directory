package openapisdk.models.operations;



public class ComputeNodeDisableSchedulingResponse {
    public Object batchError;
    public ComputeNodeDisableSchedulingResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ComputeNodeDisableSchedulingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeDisableSchedulingResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeDisableSchedulingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}