package openapisdk.models.operations;



public class PostAdminMappingsResponse {
    public String contentType;
    public PostAdminMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAdminMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAdminMappings201ApplicationJson postAdminMappings201ApplicationJSONObject;
    public PostAdminMappingsResponse withPostAdminMappings201ApplicationJsonObject(PostAdminMappings201ApplicationJson postAdminMappings201ApplicationJSONObject) {
        this.postAdminMappings201ApplicationJSONObject = postAdminMappings201ApplicationJSONObject;
        return this;
    }
}