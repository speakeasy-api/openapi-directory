package openapisdk.models.operations;



public class CreateChannelRequest {
    public CreateChannelPathParams pathParams;
    public CreateChannelRequest withPathParams(CreateChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateChannelRequests request;
    public CreateChannelRequest withRequest(CreateChannelRequests request) {
        this.request = request;
        return this;
    }
    public CreateChannelSecurity security;
    public CreateChannelRequest withSecurity(CreateChannelSecurity security) {
        this.security = security;
        return this;
    }
}