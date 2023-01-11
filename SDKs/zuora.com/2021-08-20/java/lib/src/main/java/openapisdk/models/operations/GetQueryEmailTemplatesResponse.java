package openapisdk.models.operations;



public class GetQueryEmailTemplatesResponse {
    public String contentType;
    public GetQueryEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetQueryEmailTemplatesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public GetQueryEmailTemplates200ApplicationJson getQueryEmailTemplates200ApplicationJSONObject;
    public GetQueryEmailTemplatesResponse withGetQueryEmailTemplates200ApplicationJsonObject(GetQueryEmailTemplates200ApplicationJson getQueryEmailTemplates200ApplicationJSONObject) {
        this.getQueryEmailTemplates200ApplicationJSONObject = getQueryEmailTemplates200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetQueryEmailTemplatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetQueryEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}