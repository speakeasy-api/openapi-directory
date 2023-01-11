package openapisdk.models.operations;



public class DashboardMeetingParticipantShareRequest {
    public DashboardMeetingParticipantSharePathParams pathParams;
    public DashboardMeetingParticipantShareRequest withPathParams(DashboardMeetingParticipantSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardMeetingParticipantShareQueryParams queryParams;
    public DashboardMeetingParticipantShareRequest withQueryParams(DashboardMeetingParticipantShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingParticipantShareSecurity security;
    public DashboardMeetingParticipantShareRequest withSecurity(DashboardMeetingParticipantShareSecurity security) {
        this.security = security;
        return this;
    }
}