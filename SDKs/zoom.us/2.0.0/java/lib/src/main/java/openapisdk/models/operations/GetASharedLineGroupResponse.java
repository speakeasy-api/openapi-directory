package openapisdk.models.operations;



public class GetASharedLineGroupResponse {
    public byte[] body;
    public GetASharedLineGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetASharedLineGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetASharedLineGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetASharedLineGroup200ApplicationJson getASharedLineGroup200ApplicationJSONObject;
    public GetASharedLineGroupResponse withGetASharedLineGroup200ApplicationJsonObject(GetASharedLineGroup200ApplicationJson getASharedLineGroup200ApplicationJSONObject) {
        this.getASharedLineGroup200ApplicationJSONObject = getASharedLineGroup200ApplicationJSONObject;
        return this;
    }
}