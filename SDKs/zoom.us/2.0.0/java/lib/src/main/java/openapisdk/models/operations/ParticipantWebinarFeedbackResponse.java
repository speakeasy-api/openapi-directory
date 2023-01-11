package openapisdk.models.operations;



public class ParticipantWebinarFeedbackResponse {
    public byte[] body;
    public ParticipantWebinarFeedbackResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ParticipantWebinarFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParticipantWebinarFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ParticipantWebinarFeedback200ApplicationJson participantWebinarFeedback200ApplicationJSONObject;
    public ParticipantWebinarFeedbackResponse withParticipantWebinarFeedback200ApplicationJsonObject(ParticipantWebinarFeedback200ApplicationJson participantWebinarFeedback200ApplicationJSONObject) {
        this.participantWebinarFeedback200ApplicationJSONObject = participantWebinarFeedback200ApplicationJSONObject;
        return this;
    }
}