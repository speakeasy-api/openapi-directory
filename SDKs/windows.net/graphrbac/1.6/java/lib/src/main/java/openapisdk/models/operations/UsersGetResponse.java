package openapisdk.models.operations;



public class UsersGetResponse {
    public String contentType;
    public UsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public UsersGetResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public UsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> user;
    public UsersGetResponse withUser(java.util.Map<String, java.util.Map<String, Object>> user) {
        this.user = user;
        return this;
    }
}