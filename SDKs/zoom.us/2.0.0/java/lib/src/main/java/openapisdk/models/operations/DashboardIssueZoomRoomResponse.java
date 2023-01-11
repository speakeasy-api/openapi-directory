package openapisdk.models.operations;



public class DashboardIssueZoomRoomResponse {
    public byte[] body;
    public DashboardIssueZoomRoomResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardIssueZoomRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardIssueZoomRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardIssueZoomRoom200ApplicationJson dashboardIssueZoomRoom200ApplicationJSONObject;
    public DashboardIssueZoomRoomResponse withDashboardIssueZoomRoom200ApplicationJsonObject(DashboardIssueZoomRoom200ApplicationJson dashboardIssueZoomRoom200ApplicationJSONObject) {
        this.dashboardIssueZoomRoom200ApplicationJSONObject = dashboardIssueZoomRoom200ApplicationJSONObject;
        return this;
    }
}