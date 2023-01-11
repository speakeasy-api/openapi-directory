package openapisdk.models.operations;



public class UserSchedulersRequest {
    public UserSchedulersPathParams pathParams;
    public UserSchedulersRequest withPathParams(UserSchedulersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserSchedulersSecurity security;
    public UserSchedulersRequest withSecurity(UserSchedulersSecurity security) {
        this.security = security;
        return this;
    }
}