package openapisdk.models.operations;



public class ListFoldersRequest {
    public ListFoldersQueryParams queryParams;
    public ListFoldersRequest withQueryParams(ListFoldersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFoldersSecurity security;
    public ListFoldersRequest withSecurity(ListFoldersSecurity security) {
        this.security = security;
        return this;
    }
}