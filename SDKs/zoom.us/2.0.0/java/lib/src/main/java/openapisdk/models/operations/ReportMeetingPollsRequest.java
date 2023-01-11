package openapisdk.models.operations;



public class ReportMeetingPollsRequest {
    public ReportMeetingPollsPathParams pathParams;
    public ReportMeetingPollsRequest withPathParams(ReportMeetingPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportMeetingPollsSecurity security;
    public ReportMeetingPollsRequest withSecurity(ReportMeetingPollsSecurity security) {
        this.security = security;
        return this;
    }
}