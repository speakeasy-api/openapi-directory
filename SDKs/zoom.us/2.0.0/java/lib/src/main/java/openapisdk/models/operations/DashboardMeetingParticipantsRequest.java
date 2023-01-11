package openapisdk.models.operations;



public class DashboardMeetingParticipantsRequest {
    public DashboardMeetingParticipantsPathParams pathParams;
    public DashboardMeetingParticipantsRequest withPathParams(DashboardMeetingParticipantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardMeetingParticipantsQueryParams queryParams;
    public DashboardMeetingParticipantsRequest withQueryParams(DashboardMeetingParticipantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingParticipantsSecurity security;
    public DashboardMeetingParticipantsRequest withSecurity(DashboardMeetingParticipantsSecurity security) {
        this.security = security;
        return this;
    }
}