package openapisdk.models.operations;



public class DashboardIssueDetailZoomRoomRequest {
    public DashboardIssueDetailZoomRoomPathParams pathParams;
    public DashboardIssueDetailZoomRoomRequest withPathParams(DashboardIssueDetailZoomRoomPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardIssueDetailZoomRoomQueryParams queryParams;
    public DashboardIssueDetailZoomRoomRequest withQueryParams(DashboardIssueDetailZoomRoomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardIssueDetailZoomRoomSecurity security;
    public DashboardIssueDetailZoomRoomRequest withSecurity(DashboardIssueDetailZoomRoomSecurity security) {
        this.security = security;
        return this;
    }
}