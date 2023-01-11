package openapisdk.models.operations;



public class DashboardMeetingsResponse {
    public byte[] body;
    public DashboardMeetingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardMeetings200ApplicationJson dashboardMeetings200ApplicationJSONObject;
    public DashboardMeetingsResponse withDashboardMeetings200ApplicationJsonObject(DashboardMeetings200ApplicationJson dashboardMeetings200ApplicationJSONObject) {
        this.dashboardMeetings200ApplicationJSONObject = dashboardMeetings200ApplicationJSONObject;
        return this;
    }
}