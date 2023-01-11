package openapisdk.models.operations;



public class DashboardIssueZoomRoomRequest {
    public DashboardIssueZoomRoomQueryParams queryParams;
    public DashboardIssueZoomRoomRequest withQueryParams(DashboardIssueZoomRoomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardIssueZoomRoomSecurity security;
    public DashboardIssueZoomRoomRequest withSecurity(DashboardIssueZoomRoomSecurity security) {
        this.security = security;
        return this;
    }
}