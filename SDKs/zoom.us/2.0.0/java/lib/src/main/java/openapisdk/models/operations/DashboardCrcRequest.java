package openapisdk.models.operations;



public class DashboardCrcRequest {
    public DashboardCrcQueryParams queryParams;
    public DashboardCrcRequest withQueryParams(DashboardCrcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardCrcSecurity security;
    public DashboardCrcRequest withSecurity(DashboardCrcSecurity security) {
        this.security = security;
        return this;
    }
}