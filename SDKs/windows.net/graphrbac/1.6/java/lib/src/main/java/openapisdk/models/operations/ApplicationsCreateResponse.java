package openapisdk.models.operations;



public class ApplicationsCreateResponse {
    public java.util.Map<String, java.util.Map<String, Object>> application;
    public ApplicationsCreateResponse withApplication(java.util.Map<String, java.util.Map<String, Object>> application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public ApplicationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsCreateResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}