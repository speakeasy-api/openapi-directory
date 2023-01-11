package openapisdk.models.operations;



public class DashboardWebinarsRequest {
    public DashboardWebinarsQueryParams queryParams;
    public DashboardWebinarsRequest withQueryParams(DashboardWebinarsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarsSecurity security;
    public DashboardWebinarsRequest withSecurity(DashboardWebinarsSecurity security) {
        this.security = security;
        return this;
    }
}