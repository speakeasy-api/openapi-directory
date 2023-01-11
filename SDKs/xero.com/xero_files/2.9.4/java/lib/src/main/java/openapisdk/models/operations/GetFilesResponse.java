package openapisdk.models.operations;



public class GetFilesResponse {
    public String contentType;
    public GetFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Files files;
    public GetFilesResponse withFiles(openapisdk.models.shared.Files files) {
        this.files = files;
        return this;
    }
    public Long statusCode;
    public GetFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}