package openapisdk.models.operations;



public class GetEventTriggersResponse {
    public String contentType;
    public GetEventTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEventTriggersResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public GetEventTriggers200ApplicationJson getEventTriggers200ApplicationJSONObject;
    public GetEventTriggersResponse withGetEventTriggers200ApplicationJsonObject(GetEventTriggers200ApplicationJson getEventTriggers200ApplicationJSONObject) {
        this.getEventTriggers200ApplicationJSONObject = getEventTriggers200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventTriggersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}