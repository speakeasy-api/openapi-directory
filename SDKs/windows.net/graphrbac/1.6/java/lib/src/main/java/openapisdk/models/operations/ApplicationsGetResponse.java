package openapisdk.models.operations;



public class ApplicationsGetResponse {
    public java.util.Map<String, java.util.Map<String, Object>> application;
    public ApplicationsGetResponse withApplication(java.util.Map<String, java.util.Map<String, Object>> application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public ApplicationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsGetResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}