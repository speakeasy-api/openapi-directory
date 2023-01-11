package openapisdk.models.operations;



public class GetFolderResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFolderResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Folder folder;
    public GetFolderResponse withFolder(openapisdk.models.shared.Folder folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public GetFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}