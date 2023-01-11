package openapisdk.models.operations;



public class ReportUsersRequest {
    public ReportUsersQueryParams queryParams;
    public ReportUsersRequest withQueryParams(ReportUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportUsersSecurity security;
    public ReportUsersRequest withSecurity(ReportUsersSecurity security) {
        this.security = security;
        return this;
    }
}