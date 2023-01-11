package openapisdk.models.operations;



public class DashboardMeetingParticipantsQosRequest {
    public DashboardMeetingParticipantsQosPathParams pathParams;
    public DashboardMeetingParticipantsQosRequest withPathParams(DashboardMeetingParticipantsQosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardMeetingParticipantsQosQueryParams queryParams;
    public DashboardMeetingParticipantsQosRequest withQueryParams(DashboardMeetingParticipantsQosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingParticipantsQosSecurity security;
    public DashboardMeetingParticipantsQosRequest withSecurity(DashboardMeetingParticipantsQosSecurity security) {
        this.security = security;
        return this;
    }
}