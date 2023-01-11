package openapisdk.models.operations;



public class UpdateFolderResponse {
    public String contentType;
    public UpdateFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object folder;
    public UpdateFolderResponse withFolder(Object folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public UpdateFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}