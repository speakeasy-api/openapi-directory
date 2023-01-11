package openapisdk.models.operations;



public class ApplicationsListKeyCredentialsResponse {
    public String contentType;
    public ApplicationsListKeyCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsListKeyCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.KeyCredentialListResult keyCredentialListResult;
    public ApplicationsListKeyCredentialsResponse withKeyCredentialListResult(openapisdk.models.shared.KeyCredentialListResult keyCredentialListResult) {
        this.keyCredentialListResult = keyCredentialListResult;
        return this;
    }
    public Long statusCode;
    public ApplicationsListKeyCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}