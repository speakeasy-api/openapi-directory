package openapisdk.models.operations;



public class MeetingInvitationRequest {
    public MeetingInvitationPathParams pathParams;
    public MeetingInvitationRequest withPathParams(MeetingInvitationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingInvitationSecurity security;
    public MeetingInvitationRequest withSecurity(MeetingInvitationSecurity security) {
        this.security = security;
        return this;
    }
}