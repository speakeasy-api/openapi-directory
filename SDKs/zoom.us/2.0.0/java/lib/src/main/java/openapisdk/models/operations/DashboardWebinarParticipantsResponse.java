package openapisdk.models.operations;



public class DashboardWebinarParticipantsResponse {
    public byte[] body;
    public DashboardWebinarParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardWebinarParticipants200ApplicationJson dashboardWebinarParticipants200ApplicationJSONObject;
    public DashboardWebinarParticipantsResponse withDashboardWebinarParticipants200ApplicationJsonObject(DashboardWebinarParticipants200ApplicationJson dashboardWebinarParticipants200ApplicationJSONObject) {
        this.dashboardWebinarParticipants200ApplicationJSONObject = dashboardWebinarParticipants200ApplicationJSONObject;
        return this;
    }
}