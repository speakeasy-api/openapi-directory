package openapisdk.models.operations;



public class GetCustomObjectDefinitionByTypeResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public GetCustomObjectDefinitionByTypeResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public GetCustomObjectDefinitionByTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectDefinition customObjectDefinition;
    public GetCustomObjectDefinitionByTypeResponse withCustomObjectDefinition(openapisdk.models.shared.CustomObjectDefinition customObjectDefinition) {
        this.customObjectDefinition = customObjectDefinition;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomObjectDefinitionByTypeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomObjectDefinitionByTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}