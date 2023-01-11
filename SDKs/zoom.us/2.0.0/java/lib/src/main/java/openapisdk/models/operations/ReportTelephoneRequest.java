package openapisdk.models.operations;



public class ReportTelephoneRequest {
    public ReportTelephoneQueryParams queryParams;
    public ReportTelephoneRequest withQueryParams(ReportTelephoneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportTelephoneSecurity security;
    public ReportTelephoneRequest withSecurity(ReportTelephoneSecurity security) {
        this.security = security;
        return this;
    }
}