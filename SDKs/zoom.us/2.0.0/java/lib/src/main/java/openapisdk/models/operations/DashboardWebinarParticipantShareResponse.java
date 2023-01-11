package openapisdk.models.operations;



public class DashboardWebinarParticipantShareResponse {
    public byte[] body;
    public DashboardWebinarParticipantShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarParticipantShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarParticipantShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardWebinarParticipantShare200ApplicationJson dashboardWebinarParticipantShare200ApplicationJSONObject;
    public DashboardWebinarParticipantShareResponse withDashboardWebinarParticipantShare200ApplicationJsonObject(DashboardWebinarParticipantShare200ApplicationJson dashboardWebinarParticipantShare200ApplicationJSONObject) {
        this.dashboardWebinarParticipantShare200ApplicationJSONObject = dashboardWebinarParticipantShare200ApplicationJSONObject;
        return this;
    }
}