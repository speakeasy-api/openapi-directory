package openapisdk.models.operations;



public class GetAdminScenariosResponse {
    public String contentType;
    public GetAdminScenariosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdminScenariosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAdminScenarios200ApplicationJson getAdminScenarios200ApplicationJSONObject;
    public GetAdminScenariosResponse withGetAdminScenarios200ApplicationJsonObject(GetAdminScenarios200ApplicationJson getAdminScenarios200ApplicationJSONObject) {
        this.getAdminScenarios200ApplicationJSONObject = getAdminScenarios200ApplicationJSONObject;
        return this;
    }
}