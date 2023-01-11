package openapisdk.models.operations;



public class UserSchedulerDeleteRequest {
    public UserSchedulerDeletePathParams pathParams;
    public UserSchedulerDeleteRequest withPathParams(UserSchedulerDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserSchedulerDeleteSecurity security;
    public UserSchedulerDeleteRequest withSecurity(UserSchedulerDeleteSecurity security) {
        this.security = security;
        return this;
    }
}