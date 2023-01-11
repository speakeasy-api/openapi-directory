package openapisdk.models.operations;



public class LeaveGroupRequest {
    public LeaveGroupPathParams pathParams;
    public LeaveGroupRequest withPathParams(LeaveGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LeaveGroupSecurity security;
    public LeaveGroupRequest withSecurity(LeaveGroupSecurity security) {
        this.security = security;
        return this;
    }
}