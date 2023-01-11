package openapisdk.models.operations;



public class DashboardMeetingDetailRequest {
    public DashboardMeetingDetailPathParams pathParams;
    public DashboardMeetingDetailRequest withPathParams(DashboardMeetingDetailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardMeetingDetailQueryParams queryParams;
    public DashboardMeetingDetailRequest withQueryParams(DashboardMeetingDetailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingDetailSecurity security;
    public DashboardMeetingDetailRequest withSecurity(DashboardMeetingDetailSecurity security) {
        this.security = security;
        return this;
    }
}