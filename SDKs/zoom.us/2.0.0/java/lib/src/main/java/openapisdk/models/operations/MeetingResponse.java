package openapisdk.models.operations;



public class MeetingResponse {
    public byte[] body;
    public MeetingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MeetingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Meeting200ApplicationJson meeting200ApplicationJSONObject;
    public MeetingResponse withMeeting200ApplicationJsonObject(Meeting200ApplicationJson meeting200ApplicationJSONObject) {
        this.meeting200ApplicationJSONObject = meeting200ApplicationJSONObject;
        return this;
    }
}