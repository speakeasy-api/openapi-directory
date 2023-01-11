package openapisdk.models.operations;



public class ResourcesApiGetListResponse {
    public String contentType;
    public ResourcesApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, String>> resourcesApiGetList200ApplicationJSONObject;
    public ResourcesApiGetListResponse withResourcesApiGetList200ApplicationJsonObject(java.util.Map<String, java.util.Map<String, String>> resourcesApiGetList200ApplicationJSONObject) {
        this.resourcesApiGetList200ApplicationJSONObject = resourcesApiGetList200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, String>> resourcesApiGetList200TextJSONObject;
    public ResourcesApiGetListResponse withResourcesApiGetList200TextJsonObject(java.util.Map<String, java.util.Map<String, String>> resourcesApiGetList200TextJSONObject) {
        this.resourcesApiGetList200TextJSONObject = resourcesApiGetList200TextJSONObject;
        return this;
    }
    public Long statusCode;
    public ResourcesApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}