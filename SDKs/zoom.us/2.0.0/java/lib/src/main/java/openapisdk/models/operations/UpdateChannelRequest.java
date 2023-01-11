package openapisdk.models.operations;



public class UpdateChannelRequest {
    public UpdateChannelPathParams pathParams;
    public UpdateChannelRequest withPathParams(UpdateChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateChannelRequests request;
    public UpdateChannelRequest withRequest(UpdateChannelRequests request) {
        this.request = request;
        return this;
    }
    public UpdateChannelSecurity security;
    public UpdateChannelRequest withSecurity(UpdateChannelSecurity security) {
        this.security = security;
        return this;
    }
}