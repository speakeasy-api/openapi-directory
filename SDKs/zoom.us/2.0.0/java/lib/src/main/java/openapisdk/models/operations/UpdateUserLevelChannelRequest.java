package openapisdk.models.operations;



public class UpdateUserLevelChannelRequest {
    public UpdateUserLevelChannelPathParams pathParams;
    public UpdateUserLevelChannelRequest withPathParams(UpdateUserLevelChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateUserLevelChannelRequests request;
    public UpdateUserLevelChannelRequest withRequest(UpdateUserLevelChannelRequests request) {
        this.request = request;
        return this;
    }
    public UpdateUserLevelChannelSecurity security;
    public UpdateUserLevelChannelRequest withSecurity(UpdateUserLevelChannelSecurity security) {
        this.security = security;
        return this;
    }
}