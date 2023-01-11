package openapisdk.models.operations;



public class DashboardClientFeedbackDetailRequest {
    public DashboardClientFeedbackDetailPathParams pathParams;
    public DashboardClientFeedbackDetailRequest withPathParams(DashboardClientFeedbackDetailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardClientFeedbackDetailQueryParams queryParams;
    public DashboardClientFeedbackDetailRequest withQueryParams(DashboardClientFeedbackDetailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardClientFeedbackDetailSecurity security;
    public DashboardClientFeedbackDetailRequest withSecurity(DashboardClientFeedbackDetailSecurity security) {
        this.security = security;
        return this;
    }
}