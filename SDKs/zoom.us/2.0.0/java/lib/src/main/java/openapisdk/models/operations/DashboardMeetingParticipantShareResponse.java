package openapisdk.models.operations;



public class DashboardMeetingParticipantShareResponse {
    public byte[] body;
    public DashboardMeetingParticipantShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingParticipantShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingParticipantShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardMeetingParticipantShare200ApplicationJson dashboardMeetingParticipantShare200ApplicationJSONObject;
    public DashboardMeetingParticipantShareResponse withDashboardMeetingParticipantShare200ApplicationJsonObject(DashboardMeetingParticipantShare200ApplicationJson dashboardMeetingParticipantShare200ApplicationJSONObject) {
        this.dashboardMeetingParticipantShare200ApplicationJSONObject = dashboardMeetingParticipantShare200ApplicationJSONObject;
        return this;
    }
}