package openapisdk.models.operations;



public class DeleteHpvcManagerRequest {
    public DeleteHpvcManagerPathParams pathParams;
    public DeleteHpvcManagerRequest withPathParams(DeleteHpvcManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteHpvcManagerSecurity security;
    public DeleteHpvcManagerRequest withSecurity(DeleteHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}