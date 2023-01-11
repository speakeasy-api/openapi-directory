package openapisdk.models.operations;



public class DashboardIssueDetailZoomRoomResponse {
    public byte[] body;
    public DashboardIssueDetailZoomRoomResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardIssueDetailZoomRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardIssueDetailZoomRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardIssueDetailZoomRoom200ApplicationJson dashboardIssueDetailZoomRoom200ApplicationJSONObject;
    public DashboardIssueDetailZoomRoomResponse withDashboardIssueDetailZoomRoom200ApplicationJsonObject(DashboardIssueDetailZoomRoom200ApplicationJson dashboardIssueDetailZoomRoom200ApplicationJSONObject) {
        this.dashboardIssueDetailZoomRoom200ApplicationJSONObject = dashboardIssueDetailZoomRoom200ApplicationJSONObject;
        return this;
    }
}