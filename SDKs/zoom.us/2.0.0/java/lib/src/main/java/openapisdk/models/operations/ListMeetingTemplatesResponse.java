package openapisdk.models.operations;



public class ListMeetingTemplatesResponse {
    public byte[] body;
    public ListMeetingTemplatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListMeetingTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListMeetingTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListMeetingTemplates200ApplicationJson listMeetingTemplates200ApplicationJSONObject;
    public ListMeetingTemplatesResponse withListMeetingTemplates200ApplicationJsonObject(ListMeetingTemplates200ApplicationJson listMeetingTemplates200ApplicationJSONObject) {
        this.listMeetingTemplates200ApplicationJSONObject = listMeetingTemplates200ApplicationJSONObject;
        return this;
    }
}