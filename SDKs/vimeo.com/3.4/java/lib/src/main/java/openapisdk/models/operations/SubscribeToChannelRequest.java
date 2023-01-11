package openapisdk.models.operations;



public class SubscribeToChannelRequest {
    public SubscribeToChannelPathParams pathParams;
    public SubscribeToChannelRequest withPathParams(SubscribeToChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SubscribeToChannelSecurity security;
    public SubscribeToChannelRequest withSecurity(SubscribeToChannelSecurity security) {
        this.security = security;
        return this;
    }
}