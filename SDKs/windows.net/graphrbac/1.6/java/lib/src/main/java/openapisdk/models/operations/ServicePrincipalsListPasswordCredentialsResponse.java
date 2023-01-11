package openapisdk.models.operations;



public class ServicePrincipalsListPasswordCredentialsResponse {
    public String contentType;
    public ServicePrincipalsListPasswordCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsListPasswordCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.PasswordCredentialListResult passwordCredentialListResult;
    public ServicePrincipalsListPasswordCredentialsResponse withPasswordCredentialListResult(openapisdk.models.shared.PasswordCredentialListResult passwordCredentialListResult) {
        this.passwordCredentialListResult = passwordCredentialListResult;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsListPasswordCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}