package openapisdk.models.operations;



public class FileGetFromTaskResponse {
    public Object batchError;
    public FileGetFromTaskResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileGetFromTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] fileGetFromTask200ApplicationJSONBinaryString;
    public FileGetFromTaskResponse withFileGetFromTask200ApplicationJsonBinaryString(byte[] fileGetFromTask200ApplicationJSONBinaryString) {
        this.fileGetFromTask200ApplicationJSONBinaryString = fileGetFromTask200ApplicationJSONBinaryString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileGetFromTaskResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FileGetFromTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}