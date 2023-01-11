package openapisdk.models.operations;



public class ListPastMeetingPollsResponse {
    public byte[] body;
    public ListPastMeetingPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPastMeetingPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPastMeetingPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPastMeetingPolls200ApplicationJson listPastMeetingPolls200ApplicationJSONObject;
    public ListPastMeetingPollsResponse withListPastMeetingPolls200ApplicationJsonObject(ListPastMeetingPolls200ApplicationJson listPastMeetingPolls200ApplicationJSONObject) {
        this.listPastMeetingPolls200ApplicationJSONObject = listPastMeetingPolls200ApplicationJSONObject;
        return this;
    }
}