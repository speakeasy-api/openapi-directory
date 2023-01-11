package openapisdk.models.operations;



public class GetCallQoSResponse {
    public byte[] body;
    public GetCallQoSResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCallQoSResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCallQoSResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCallQoS200ApplicationJson getCallQoS200ApplicationJSONObject;
    public GetCallQoSResponse withGetCallQoS200ApplicationJsonObject(GetCallQoS200ApplicationJson getCallQoS200ApplicationJSONObject) {
        this.getCallQoS200ApplicationJSONObject = getCallQoS200ApplicationJSONObject;
        return this;
    }
}