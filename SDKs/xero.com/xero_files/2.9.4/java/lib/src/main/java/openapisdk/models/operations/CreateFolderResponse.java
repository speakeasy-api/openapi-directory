package openapisdk.models.operations;



public class CreateFolderResponse {
    public String contentType;
    public CreateFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object folder;
    public CreateFolderResponse withFolder(Object folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public CreateFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}