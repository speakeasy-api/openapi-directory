package openapisdk.models.operations;



public class GetQueryNotificationDefinitionsResponse {
    public String contentType;
    public GetQueryNotificationDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetQueryNotificationDefinitionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public GetQueryNotificationDefinitions200ApplicationJson getQueryNotificationDefinitions200ApplicationJSONObject;
    public GetQueryNotificationDefinitionsResponse withGetQueryNotificationDefinitions200ApplicationJsonObject(GetQueryNotificationDefinitions200ApplicationJson getQueryNotificationDefinitions200ApplicationJSONObject) {
        this.getQueryNotificationDefinitions200ApplicationJSONObject = getQueryNotificationDefinitions200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetQueryNotificationDefinitionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetQueryNotificationDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}