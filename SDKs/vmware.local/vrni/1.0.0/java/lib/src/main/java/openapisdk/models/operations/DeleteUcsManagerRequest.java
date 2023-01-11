package openapisdk.models.operations;



public class DeleteUcsManagerRequest {
    public DeleteUcsManagerPathParams pathParams;
    public DeleteUcsManagerRequest withPathParams(DeleteUcsManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUcsManagerSecurity security;
    public DeleteUcsManagerRequest withSecurity(DeleteUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}