package openapisdk.models.operations;



public class GetACommonAreaPhoneResponse {
    public byte[] body;
    public GetACommonAreaPhoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetACommonAreaPhoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetACommonAreaPhoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetACommonAreaPhone200ApplicationJson getACommonAreaPhone200ApplicationJSONObject;
    public GetACommonAreaPhoneResponse withGetACommonAreaPhone200ApplicationJsonObject(GetACommonAreaPhone200ApplicationJson getACommonAreaPhone200ApplicationJSONObject) {
        this.getACommonAreaPhone200ApplicationJSONObject = getACommonAreaPhone200ApplicationJSONObject;
        return this;
    }
}