package openapisdk.models.operations;



public class ReportMeetingDetailsRequest {
    public ReportMeetingDetailsPathParams pathParams;
    public ReportMeetingDetailsRequest withPathParams(ReportMeetingDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportMeetingDetailsSecurity security;
    public ReportMeetingDetailsRequest withSecurity(ReportMeetingDetailsSecurity security) {
        this.security = security;
        return this;
    }
}