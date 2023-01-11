package openapisdk.models.operations;



public class GetUserLevelChannelRequest {
    public GetUserLevelChannelPathParams pathParams;
    public GetUserLevelChannelRequest withPathParams(GetUserLevelChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserLevelChannelSecurity security;
    public GetUserLevelChannelRequest withSecurity(GetUserLevelChannelSecurity security) {
        this.security = security;
        return this;
    }
}