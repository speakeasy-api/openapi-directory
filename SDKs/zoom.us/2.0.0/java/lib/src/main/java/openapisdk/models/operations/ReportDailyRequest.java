package openapisdk.models.operations;



public class ReportDailyRequest {
    public ReportDailyQueryParams queryParams;
    public ReportDailyRequest withQueryParams(ReportDailyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportDailySecurity security;
    public ReportDailyRequest withSecurity(ReportDailySecurity security) {
        this.security = security;
        return this;
    }
}