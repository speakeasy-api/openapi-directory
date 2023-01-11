package openapisdk.models.operations;



public class ComputeNodeGetRemoteDesktopResponse {
    public Object batchError;
    public ComputeNodeGetRemoteDesktopResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public byte[] computeNodeGetRemoteDesktop200ApplicationJSONBinaryString;
    public ComputeNodeGetRemoteDesktopResponse withComputeNodeGetRemoteDesktop200ApplicationJsonBinaryString(byte[] computeNodeGetRemoteDesktop200ApplicationJSONBinaryString) {
        this.computeNodeGetRemoteDesktop200ApplicationJSONBinaryString = computeNodeGetRemoteDesktop200ApplicationJSONBinaryString;
        return this;
    }
    public String contentType;
    public ComputeNodeGetRemoteDesktopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ComputeNodeGetRemoteDesktopResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ComputeNodeGetRemoteDesktopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}