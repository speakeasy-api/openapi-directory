package openapisdk.models.operations;



public class ListWebinarParticipantsResponse {
    public byte[] body;
    public ListWebinarParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListWebinarParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWebinarParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListWebinarParticipants200ApplicationJson listWebinarParticipants200ApplicationJSONObject;
    public ListWebinarParticipantsResponse withListWebinarParticipants200ApplicationJsonObject(ListWebinarParticipants200ApplicationJson listWebinarParticipants200ApplicationJSONObject) {
        this.listWebinarParticipants200ApplicationJSONObject = listWebinarParticipants200ApplicationJSONObject;
        return this;
    }
}