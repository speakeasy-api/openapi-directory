package openapisdk.models.operations;



public class ApplicationsUpdatePasswordCredentialsResponse {
    public String contentType;
    public ApplicationsUpdatePasswordCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsUpdatePasswordCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsUpdatePasswordCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}