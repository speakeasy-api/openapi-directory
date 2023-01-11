package openapisdk.models.operations;



public class ReportWebinarQaRequest {
    public ReportWebinarQaPathParams pathParams;
    public ReportWebinarQaRequest withPathParams(ReportWebinarQaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportWebinarQaSecurity security;
    public ReportWebinarQaRequest withSecurity(ReportWebinarQaSecurity security) {
        this.security = security;
        return this;
    }
}