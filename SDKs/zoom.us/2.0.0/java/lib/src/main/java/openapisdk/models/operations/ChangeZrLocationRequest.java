package openapisdk.models.operations;



public class ChangeZrLocationRequest {
    public ChangeZrLocationPathParams pathParams;
    public ChangeZrLocationRequest withPathParams(ChangeZrLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeZrLocationRequests request;
    public ChangeZrLocationRequest withRequest(ChangeZrLocationRequests request) {
        this.request = request;
        return this;
    }
    public ChangeZrLocationSecurity security;
    public ChangeZrLocationRequest withSecurity(ChangeZrLocationSecurity security) {
        this.security = security;
        return this;
    }
}