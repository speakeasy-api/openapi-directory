package openapisdk.models.operations;



public class DeleteFileAssociationRequest {
    public DeleteFileAssociationPathParams pathParams;
    public DeleteFileAssociationRequest withPathParams(DeleteFileAssociationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFileAssociationHeaders headers;
    public DeleteFileAssociationRequest withHeaders(DeleteFileAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteFileAssociationSecurity security;
    public DeleteFileAssociationRequest withSecurity(DeleteFileAssociationSecurity security) {
        this.security = security;
        return this;
    }
}