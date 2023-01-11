package openapisdk.models.operations;



public class ServicePrincipalsListResponse {
    public String contentType;
    public ServicePrincipalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsListResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.ServicePrincipalListResult servicePrincipalListResult;
    public ServicePrincipalsListResponse withServicePrincipalListResult(openapisdk.models.shared.ServicePrincipalListResult servicePrincipalListResult) {
        this.servicePrincipalListResult = servicePrincipalListResult;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}