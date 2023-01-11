package openapisdk.models.operations;



public class ReportWebinarDetailsRequest {
    public ReportWebinarDetailsPathParams pathParams;
    public ReportWebinarDetailsRequest withPathParams(ReportWebinarDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportWebinarDetailsSecurity security;
    public ReportWebinarDetailsRequest withSecurity(ReportWebinarDetailsSecurity security) {
        this.security = security;
        return this;
    }
}