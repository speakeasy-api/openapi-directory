package openapisdk.models.operations;



public class ChangeParentLocationRequest {
    public ChangeParentLocationPathParams pathParams;
    public ChangeParentLocationRequest withPathParams(ChangeParentLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeParentLocationRequests request;
    public ChangeParentLocationRequest withRequest(ChangeParentLocationRequests request) {
        this.request = request;
        return this;
    }
    public ChangeParentLocationSecurity security;
    public ChangeParentLocationRequest withSecurity(ChangeParentLocationSecurity security) {
        this.security = security;
        return this;
    }
}