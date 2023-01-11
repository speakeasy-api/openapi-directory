package openapisdk.models.operations;



public class DashboardZoomRoomIssueRequest {
    public DashboardZoomRoomIssueQueryParams queryParams;
    public DashboardZoomRoomIssueRequest withQueryParams(DashboardZoomRoomIssueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardZoomRoomIssueSecurity security;
    public DashboardZoomRoomIssueRequest withSecurity(DashboardZoomRoomIssueSecurity security) {
        this.security = security;
        return this;
    }
}