package openapisdk.models.operations;



public class JobSchedulePatchResponse {
    public Object batchError;
    public JobSchedulePatchResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobSchedulePatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobSchedulePatchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobSchedulePatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}