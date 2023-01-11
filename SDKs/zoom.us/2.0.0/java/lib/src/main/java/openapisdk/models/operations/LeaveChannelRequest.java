package openapisdk.models.operations;



public class LeaveChannelRequest {
    public LeaveChannelPathParams pathParams;
    public LeaveChannelRequest withPathParams(LeaveChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LeaveChannelSecurity security;
    public LeaveChannelRequest withSecurity(LeaveChannelSecurity security) {
        this.security = security;
        return this;
    }
}