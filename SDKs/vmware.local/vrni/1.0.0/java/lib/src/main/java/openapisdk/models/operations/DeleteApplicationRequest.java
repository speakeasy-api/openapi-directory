package openapisdk.models.operations;



public class DeleteApplicationRequest {
    public DeleteApplicationPathParams pathParams;
    public DeleteApplicationRequest withPathParams(DeleteApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApplicationSecurity security;
    public DeleteApplicationRequest withSecurity(DeleteApplicationSecurity security) {
        this.security = security;
        return this;
    }
}