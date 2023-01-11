package openapisdk.models.operations;



public class UsersCreateResponse {
    public String contentType;
    public UsersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public UsersCreateResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public UsersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> user;
    public UsersCreateResponse withUser(java.util.Map<String, java.util.Map<String, Object>> user) {
        this.user = user;
        return this;
    }
}