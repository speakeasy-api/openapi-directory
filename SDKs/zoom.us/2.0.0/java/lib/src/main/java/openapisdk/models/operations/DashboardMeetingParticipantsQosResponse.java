package openapisdk.models.operations;



public class DashboardMeetingParticipantsQosResponse {
    public byte[] body;
    public DashboardMeetingParticipantsQosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingParticipantsQosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DashboardMeetingParticipantsQosParticipantQosList participantQOSList;
    public DashboardMeetingParticipantsQosResponse withParticipantQosList(DashboardMeetingParticipantsQosParticipantQosList participantQOSList) {
        this.participantQOSList = participantQOSList;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingParticipantsQosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}