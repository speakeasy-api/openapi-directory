package openapisdk.models.operations;



public class DashboardWebinarParticipantsQosResponse {
    public byte[] body;
    public DashboardWebinarParticipantsQosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarParticipantsQosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DashboardWebinarParticipantsQosParticipantQosList participantQOSList;
    public DashboardWebinarParticipantsQosResponse withParticipantQosList(DashboardWebinarParticipantsQosParticipantQosList participantQOSList) {
        this.participantQOSList = participantQOSList;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarParticipantsQosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}