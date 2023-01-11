package openapisdk.models.operations;



public class DashboardWebinarDetailRequest {
    public DashboardWebinarDetailPathParams pathParams;
    public DashboardWebinarDetailRequest withPathParams(DashboardWebinarDetailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardWebinarDetailQueryParams queryParams;
    public DashboardWebinarDetailRequest withQueryParams(DashboardWebinarDetailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarDetailSecurity security;
    public DashboardWebinarDetailRequest withSecurity(DashboardWebinarDetailSecurity security) {
        this.security = security;
        return this;
    }
}