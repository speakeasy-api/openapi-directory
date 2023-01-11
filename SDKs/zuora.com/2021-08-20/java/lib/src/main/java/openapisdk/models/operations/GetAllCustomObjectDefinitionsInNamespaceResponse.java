package openapisdk.models.operations;



public class GetAllCustomObjectDefinitionsInNamespaceResponse {
    public String contentType;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse getAllCustomObjectDefinitionsInNamespaceResponse;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withGetAllCustomObjectDefinitionsInNamespaceResponse(openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse getAllCustomObjectDefinitionsInNamespaceResponse) {
        this.getAllCustomObjectDefinitionsInNamespaceResponse = getAllCustomObjectDefinitionsInNamespaceResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}