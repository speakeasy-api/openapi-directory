package openapisdk.models.operations;



public class UpdateUserProfileRequest {
    public UpdateUserProfilePathParams pathParams;
    public UpdateUserProfileRequest withPathParams(UpdateUserProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateUserProfileRequests request;
    public UpdateUserProfileRequest withRequest(UpdateUserProfileRequests request) {
        this.request = request;
        return this;
    }
    public UpdateUserProfileSecurity security;
    public UpdateUserProfileRequest withSecurity(UpdateUserProfileSecurity security) {
        this.security = security;
        return this;
    }
}