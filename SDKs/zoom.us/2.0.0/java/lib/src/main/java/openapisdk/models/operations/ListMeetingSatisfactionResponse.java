package openapisdk.models.operations;



public class ListMeetingSatisfactionResponse {
    public byte[] body;
    public ListMeetingSatisfactionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListMeetingSatisfactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListMeetingSatisfactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListMeetingSatisfaction200ApplicationJson listMeetingSatisfaction200ApplicationJSONObject;
    public ListMeetingSatisfactionResponse withListMeetingSatisfaction200ApplicationJsonObject(ListMeetingSatisfaction200ApplicationJson listMeetingSatisfaction200ApplicationJSONObject) {
        this.listMeetingSatisfaction200ApplicationJSONObject = listMeetingSatisfaction200ApplicationJSONObject;
        return this;
    }
}