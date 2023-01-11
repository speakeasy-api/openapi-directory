package openapisdk.models.operations;



public class ReportMeetingParticipantsRequest {
    public ReportMeetingParticipantsPathParams pathParams;
    public ReportMeetingParticipantsRequest withPathParams(ReportMeetingParticipantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportMeetingParticipantsQueryParams queryParams;
    public ReportMeetingParticipantsRequest withQueryParams(ReportMeetingParticipantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportMeetingParticipantsSecurity security;
    public ReportMeetingParticipantsRequest withSecurity(ReportMeetingParticipantsSecurity security) {
        this.security = security;
        return this;
    }
}