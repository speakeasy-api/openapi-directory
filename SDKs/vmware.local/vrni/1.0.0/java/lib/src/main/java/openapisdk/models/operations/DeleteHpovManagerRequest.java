package openapisdk.models.operations;



public class DeleteHpovManagerRequest {
    public DeleteHpovManagerPathParams pathParams;
    public DeleteHpovManagerRequest withPathParams(DeleteHpovManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteHpovManagerSecurity security;
    public DeleteHpovManagerRequest withSecurity(DeleteHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}