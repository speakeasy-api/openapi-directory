package openapisdk.models.operations;



public class GetAdminMappingsResponse {
    public String contentType;
    public GetAdminMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdminMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAdminMappings200ApplicationJson getAdminMappings200ApplicationJSONObject;
    public GetAdminMappingsResponse withGetAdminMappings200ApplicationJsonObject(GetAdminMappings200ApplicationJson getAdminMappings200ApplicationJSONObject) {
        this.getAdminMappings200ApplicationJSONObject = getAdminMappings200ApplicationJSONObject;
        return this;
    }
}