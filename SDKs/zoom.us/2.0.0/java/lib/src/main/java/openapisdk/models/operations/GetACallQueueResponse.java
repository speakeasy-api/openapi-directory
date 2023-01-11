package openapisdk.models.operations;



public class GetACallQueueResponse {
    public byte[] body;
    public GetACallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetACallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetACallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetACallQueue200ApplicationJson getACallQueue200ApplicationJSONObject;
    public GetACallQueueResponse withGetACallQueue200ApplicationJsonObject(GetACallQueue200ApplicationJson getACallQueue200ApplicationJSONObject) {
        this.getACallQueue200ApplicationJSONObject = getACallQueue200ApplicationJSONObject;
        return this;
    }
}