package openapisdk.models.operations;



public class DashboardWebinarParticipantQosResponse {
    public byte[] body;
    public DashboardWebinarParticipantQosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarParticipantQosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DashboardWebinarParticipantQosParticipantQos participantQOS;
    public DashboardWebinarParticipantQosResponse withParticipantQos(DashboardWebinarParticipantQosParticipantQos participantQOS) {
        this.participantQOS = participantQOS;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarParticipantQosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}