package openapisdk.models.operations;



public class DashboardMeetingParticipantQosRequest {
    public DashboardMeetingParticipantQosPathParams pathParams;
    public DashboardMeetingParticipantQosRequest withPathParams(DashboardMeetingParticipantQosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardMeetingParticipantQosQueryParams queryParams;
    public DashboardMeetingParticipantQosRequest withQueryParams(DashboardMeetingParticipantQosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingParticipantQosSecurity security;
    public DashboardMeetingParticipantQosRequest withSecurity(DashboardMeetingParticipantQosSecurity security) {
        this.security = security;
        return this;
    }
}