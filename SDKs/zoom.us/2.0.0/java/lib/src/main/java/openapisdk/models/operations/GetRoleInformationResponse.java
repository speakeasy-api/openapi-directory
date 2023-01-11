package openapisdk.models.operations;



public class GetRoleInformationResponse {
    public byte[] body;
    public GetRoleInformationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRoleInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRoleInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRoleInformation200ApplicationJson getRoleInformation200ApplicationJSONObject;
    public GetRoleInformationResponse withGetRoleInformation200ApplicationJsonObject(GetRoleInformation200ApplicationJson getRoleInformation200ApplicationJSONObject) {
        this.getRoleInformation200ApplicationJSONObject = getRoleInformation200ApplicationJSONObject;
        return this;
    }
}