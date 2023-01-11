package openapisdk.models.operations;



public class DashboardZoomRoomIssueResponse {
    public byte[] body;
    public DashboardZoomRoomIssueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardZoomRoomIssueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardZoomRoomIssueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardZoomRoomIssue200ApplicationJson dashboardZoomRoomIssue200ApplicationJSONObject;
    public DashboardZoomRoomIssueResponse withDashboardZoomRoomIssue200ApplicationJsonObject(DashboardZoomRoomIssue200ApplicationJson dashboardZoomRoomIssue200ApplicationJSONObject) {
        this.dashboardZoomRoomIssue200ApplicationJSONObject = dashboardZoomRoomIssue200ApplicationJSONObject;
        return this;
    }
}