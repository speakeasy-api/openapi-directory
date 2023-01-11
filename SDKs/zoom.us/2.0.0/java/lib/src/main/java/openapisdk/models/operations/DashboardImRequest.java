package openapisdk.models.operations;



public class DashboardImRequest {
    public DashboardImQueryParams queryParams;
    public DashboardImRequest withQueryParams(DashboardImQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardImSecurity security;
    public DashboardImRequest withSecurity(DashboardImSecurity security) {
        this.security = security;
        return this;
    }
}