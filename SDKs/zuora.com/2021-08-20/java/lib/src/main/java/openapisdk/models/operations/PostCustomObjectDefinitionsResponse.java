package openapisdk.models.operations;



public class PostCustomObjectDefinitionsResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public PostCustomObjectDefinitionsResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public PostCustomObjectDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse getAllCustomObjectDefinitionsInNamespaceResponse;
    public PostCustomObjectDefinitionsResponse withGetAllCustomObjectDefinitionsInNamespaceResponse(openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse getAllCustomObjectDefinitionsInNamespaceResponse) {
        this.getAllCustomObjectDefinitionsInNamespaceResponse = getAllCustomObjectDefinitionsInNamespaceResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCustomObjectDefinitionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCustomObjectDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}