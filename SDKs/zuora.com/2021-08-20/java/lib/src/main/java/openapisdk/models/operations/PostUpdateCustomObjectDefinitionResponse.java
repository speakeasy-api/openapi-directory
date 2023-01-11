package openapisdk.models.operations;



public class PostUpdateCustomObjectDefinitionResponse {
    public String contentType;
    public PostUpdateCustomObjectDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUpdateCustomObjectDefinitionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsResponse migrationUpdateCustomObjectDefinitionsResponse;
    public PostUpdateCustomObjectDefinitionResponse withMigrationUpdateCustomObjectDefinitionsResponse(openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsResponse migrationUpdateCustomObjectDefinitionsResponse) {
        this.migrationUpdateCustomObjectDefinitionsResponse = migrationUpdateCustomObjectDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public PostUpdateCustomObjectDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}