package openapisdk.models.operations;



public class DashboardMeetingParticipantsResponse {
    public byte[] body;
    public DashboardMeetingParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardMeetingParticipants200ApplicationJson dashboardMeetingParticipants200ApplicationJSONObject;
    public DashboardMeetingParticipantsResponse withDashboardMeetingParticipants200ApplicationJsonObject(DashboardMeetingParticipants200ApplicationJson dashboardMeetingParticipants200ApplicationJSONObject) {
        this.dashboardMeetingParticipants200ApplicationJSONObject = dashboardMeetingParticipants200ApplicationJSONObject;
        return this;
    }
}