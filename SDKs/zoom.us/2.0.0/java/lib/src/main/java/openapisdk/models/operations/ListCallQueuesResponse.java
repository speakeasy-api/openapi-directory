package openapisdk.models.operations;



public class ListCallQueuesResponse {
    public byte[] body;
    public ListCallQueuesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListCallQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCallQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCallQueues200ApplicationJson listCallQueues200ApplicationJSONObject;
    public ListCallQueuesResponse withListCallQueues200ApplicationJsonObject(ListCallQueues200ApplicationJson listCallQueues200ApplicationJSONObject) {
        this.listCallQueues200ApplicationJSONObject = listCallQueues200ApplicationJSONObject;
        return this;
    }
}