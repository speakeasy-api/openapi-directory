package openapisdk.models.operations;



public class ParticipantFeedbackResponse {
    public byte[] body;
    public ParticipantFeedbackResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ParticipantFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParticipantFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ParticipantFeedback200ApplicationJson participantFeedback200ApplicationJSONObject;
    public ParticipantFeedbackResponse withParticipantFeedback200ApplicationJsonObject(ParticipantFeedback200ApplicationJson participantFeedback200ApplicationJSONObject) {
        this.participantFeedback200ApplicationJSONObject = participantFeedback200ApplicationJSONObject;
        return this;
    }
}