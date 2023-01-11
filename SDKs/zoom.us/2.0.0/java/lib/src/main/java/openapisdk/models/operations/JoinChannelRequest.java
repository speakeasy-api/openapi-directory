package openapisdk.models.operations;



public class JoinChannelRequest {
    public JoinChannelPathParams pathParams;
    public JoinChannelRequest withPathParams(JoinChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JoinChannelSecurity security;
    public JoinChannelRequest withSecurity(JoinChannelSecurity security) {
        this.security = security;
        return this;
    }
}