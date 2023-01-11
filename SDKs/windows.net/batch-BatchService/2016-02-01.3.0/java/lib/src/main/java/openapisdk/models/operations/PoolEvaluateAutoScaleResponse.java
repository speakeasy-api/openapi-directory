package openapisdk.models.operations;



public class PoolEvaluateAutoScaleResponse {
    public Object autoScaleRun;
    public PoolEvaluateAutoScaleResponse withAutoScaleRun(Object autoScaleRun) {
        this.autoScaleRun = autoScaleRun;
        return this;
    }
    public Object batchError;
    public PoolEvaluateAutoScaleResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolEvaluateAutoScaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolEvaluateAutoScaleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolEvaluateAutoScaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}