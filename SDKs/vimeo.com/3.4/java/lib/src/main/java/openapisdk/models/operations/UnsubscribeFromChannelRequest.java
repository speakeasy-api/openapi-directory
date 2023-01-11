package openapisdk.models.operations;



public class UnsubscribeFromChannelRequest {
    public UnsubscribeFromChannelPathParams pathParams;
    public UnsubscribeFromChannelRequest withPathParams(UnsubscribeFromChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnsubscribeFromChannelSecurity security;
    public UnsubscribeFromChannelRequest withSecurity(UnsubscribeFromChannelSecurity security) {
        this.security = security;
        return this;
    }
}