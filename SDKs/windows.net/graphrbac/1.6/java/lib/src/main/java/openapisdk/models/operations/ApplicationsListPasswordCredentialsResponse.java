package openapisdk.models.operations;



public class ApplicationsListPasswordCredentialsResponse {
    public String contentType;
    public ApplicationsListPasswordCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsListPasswordCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.PasswordCredentialListResult passwordCredentialListResult;
    public ApplicationsListPasswordCredentialsResponse withPasswordCredentialListResult(openapisdk.models.shared.PasswordCredentialListResult passwordCredentialListResult) {
        this.passwordCredentialListResult = passwordCredentialListResult;
        return this;
    }
    public Long statusCode;
    public ApplicationsListPasswordCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}