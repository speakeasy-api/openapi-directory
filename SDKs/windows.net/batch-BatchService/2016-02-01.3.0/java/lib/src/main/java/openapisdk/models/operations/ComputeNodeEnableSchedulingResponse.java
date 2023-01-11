package openapisdk.models.operations;



public class ComputeNodeEnableSchedulingResponse {
    public Object batchError;
    public ComputeNodeEnableSchedulingResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ComputeNodeEnableSchedulingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeEnableSchedulingResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeEnableSchedulingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}