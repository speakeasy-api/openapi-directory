package openapisdk.models.operations;



public class GetChannelRequest {
    public GetChannelPathParams pathParams;
    public GetChannelRequest withPathParams(GetChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChannelSecurity security;
    public GetChannelRequest withSecurity(GetChannelSecurity security) {
        this.security = security;
        return this;
    }
}