package openapisdk.models.operations;



public class DeleteCustomObjectDefinitionByTypeResponse {
    public String contentType;
    public DeleteCustomObjectDefinitionByTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String deleteCustomObjectDefinitionByType200ApplicationJSONUriString;
    public DeleteCustomObjectDefinitionByTypeResponse withDeleteCustomObjectDefinitionByType200ApplicationJsonUriString(String deleteCustomObjectDefinitionByType200ApplicationJSONUriString) {
        this.deleteCustomObjectDefinitionByType200ApplicationJSONUriString = deleteCustomObjectDefinitionByType200ApplicationJSONUriString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteCustomObjectDefinitionByTypeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteCustomObjectDefinitionByTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}