package openapisdk.models.operations;



public class ListPastWebinarPollResultsResponse {
    public byte[] body;
    public ListPastWebinarPollResultsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPastWebinarPollResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPastWebinarPollResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPastWebinarPollResults200ApplicationJson listPastWebinarPollResults200ApplicationJSONObject;
    public ListPastWebinarPollResultsResponse withListPastWebinarPollResults200ApplicationJsonObject(ListPastWebinarPollResults200ApplicationJson listPastWebinarPollResults200ApplicationJSONObject) {
        this.listPastWebinarPollResults200ApplicationJSONObject = listPastWebinarPollResults200ApplicationJSONObject;
        return this;
    }
}