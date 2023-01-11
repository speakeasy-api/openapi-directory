package openapisdk.models.operations;



public class ReportOperationLogsRequest {
    public ReportOperationLogsQueryParams queryParams;
    public ReportOperationLogsRequest withQueryParams(ReportOperationLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportOperationLogsSecurity security;
    public ReportOperationLogsRequest withSecurity(ReportOperationLogsSecurity security) {
        this.security = security;
        return this;
    }
}