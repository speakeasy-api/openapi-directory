package openapisdk.models.operations;



public class DeleteNsxvManagerRequest {
    public DeleteNsxvManagerPathParams pathParams;
    public DeleteNsxvManagerRequest withPathParams(DeleteNsxvManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteNsxvManagerSecurity security;
    public DeleteNsxvManagerRequest withSecurity(DeleteNsxvManagerSecurity security) {
        this.security = security;
        return this;
    }
}