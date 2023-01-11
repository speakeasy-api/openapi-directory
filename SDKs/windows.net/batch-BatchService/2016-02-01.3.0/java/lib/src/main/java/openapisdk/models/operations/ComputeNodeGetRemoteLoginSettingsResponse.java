package openapisdk.models.operations;



public class ComputeNodeGetRemoteLoginSettingsResponse {
    public Object batchError;
    public ComputeNodeGetRemoteLoginSettingsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object computeNodeGetRemoteLoginSettingsResult;
    public ComputeNodeGetRemoteLoginSettingsResponse withComputeNodeGetRemoteLoginSettingsResult(Object computeNodeGetRemoteLoginSettingsResult) {
        this.computeNodeGetRemoteLoginSettingsResult = computeNodeGetRemoteLoginSettingsResult;
        return this;
    }
    public String contentType;
    public ComputeNodeGetRemoteLoginSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeGetRemoteLoginSettingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeGetRemoteLoginSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}