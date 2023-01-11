package openapisdk.models.operations;



public class DashboardMeetingParticipantQosResponse {
    public byte[] body;
    public DashboardMeetingParticipantQosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingParticipantQosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DashboardMeetingParticipantQosParticipantQos participantQOS;
    public DashboardMeetingParticipantQosResponse withParticipantQos(DashboardMeetingParticipantQosParticipantQos participantQOS) {
        this.participantQOS = participantQOS;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingParticipantQosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}