package openapisdk.models.operations;



public class ApplicationsUpdateKeyCredentialsResponse {
    public String contentType;
    public ApplicationsUpdateKeyCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsUpdateKeyCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsUpdateKeyCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}