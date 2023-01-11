package openapisdk.models.operations;



public class DashboardMeetingsRequest {
    public DashboardMeetingsQueryParams queryParams;
    public DashboardMeetingsRequest withQueryParams(DashboardMeetingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardMeetingsSecurity security;
    public DashboardMeetingsRequest withSecurity(DashboardMeetingsSecurity security) {
        this.security = security;
        return this;
    }
}