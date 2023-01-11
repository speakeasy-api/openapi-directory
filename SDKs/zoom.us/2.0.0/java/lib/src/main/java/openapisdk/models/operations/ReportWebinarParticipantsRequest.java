package openapisdk.models.operations;



public class ReportWebinarParticipantsRequest {
    public ReportWebinarParticipantsPathParams pathParams;
    public ReportWebinarParticipantsRequest withPathParams(ReportWebinarParticipantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportWebinarParticipantsQueryParams queryParams;
    public ReportWebinarParticipantsRequest withQueryParams(ReportWebinarParticipantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportWebinarParticipantsSecurity security;
    public ReportWebinarParticipantsRequest withSecurity(ReportWebinarParticipantsSecurity security) {
        this.security = security;
        return this;
    }
}