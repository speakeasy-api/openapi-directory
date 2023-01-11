package openapisdk.models.operations;



public class ReportWebinarPollsRequest {
    public ReportWebinarPollsPathParams pathParams;
    public ReportWebinarPollsRequest withPathParams(ReportWebinarPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportWebinarPollsSecurity security;
    public ReportWebinarPollsRequest withSecurity(ReportWebinarPollsSecurity security) {
        this.security = security;
        return this;
    }
}