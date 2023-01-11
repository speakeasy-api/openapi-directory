package openapisdk.models.operations;



public class SignedInUserGetResponse {
    public String contentType;
    public SignedInUserGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public SignedInUserGetResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public SignedInUserGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> user;
    public SignedInUserGetResponse withUser(java.util.Map<String, java.util.Map<String, Object>> user) {
        this.user = user;
        return this;
    }
}