package openapisdk.models.operations;



public class FileGetFromComputeNodeResponse {
    public Object batchError;
    public FileGetFromComputeNodeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileGetFromComputeNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] fileGetFromComputeNode200ApplicationJSONBinaryString;
    public FileGetFromComputeNodeResponse withFileGetFromComputeNode200ApplicationJsonBinaryString(byte[] fileGetFromComputeNode200ApplicationJSONBinaryString) {
        this.fileGetFromComputeNode200ApplicationJSONBinaryString = fileGetFromComputeNode200ApplicationJSONBinaryString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileGetFromComputeNodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FileGetFromComputeNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}