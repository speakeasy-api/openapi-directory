package openapisdk.models.operations;



public class ListPastMeetingFilesResponse {
    public byte[] body;
    public ListPastMeetingFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPastMeetingFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPastMeetingFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPastMeetingFiles200ApplicationJson listPastMeetingFiles200ApplicationJSONObject;
    public ListPastMeetingFilesResponse withListPastMeetingFiles200ApplicationJsonObject(ListPastMeetingFiles200ApplicationJson listPastMeetingFiles200ApplicationJSONObject) {
        this.listPastMeetingFiles200ApplicationJSONObject = listPastMeetingFiles200ApplicationJSONObject;
        return this;
    }
}