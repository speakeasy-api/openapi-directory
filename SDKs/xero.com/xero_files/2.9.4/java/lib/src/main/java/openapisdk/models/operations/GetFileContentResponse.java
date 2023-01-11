package openapisdk.models.operations;



public class GetFileContentResponse {
    public String contentType;
    public GetFileContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFileContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getFileContent200ApplicationOctetStreamBinaryString;
    public GetFileContentResponse withGetFileContent200ApplicationOctetStreamBinaryString(byte[] getFileContent200ApplicationOctetStreamBinaryString) {
        this.getFileContent200ApplicationOctetStreamBinaryString = getFileContent200ApplicationOctetStreamBinaryString;
        return this;
    }
}