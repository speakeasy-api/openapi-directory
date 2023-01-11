package openapisdk.models.operations;



public class PostAdminRequestsCountResponse {
    public String contentType;
    public PostAdminRequestsCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAdminRequestsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAdminRequestsCount200ApplicationJson postAdminRequestsCount200ApplicationJSONObject;
    public PostAdminRequestsCountResponse withPostAdminRequestsCount200ApplicationJsonObject(PostAdminRequestsCount200ApplicationJson postAdminRequestsCount200ApplicationJSONObject) {
        this.postAdminRequestsCount200ApplicationJSONObject = postAdminRequestsCount200ApplicationJSONObject;
        return this;
    }
}