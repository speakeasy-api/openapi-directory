package openapisdk.models.operations;



public class ApplicationsGetServicePrincipalsIdByAppIdResponse {
    public String contentType;
    public ApplicationsGetServicePrincipalsIdByAppIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsGetServicePrincipalsIdByAppIdResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.ServicePrincipalObjectResult servicePrincipalObjectResult;
    public ApplicationsGetServicePrincipalsIdByAppIdResponse withServicePrincipalObjectResult(openapisdk.models.shared.ServicePrincipalObjectResult servicePrincipalObjectResult) {
        this.servicePrincipalObjectResult = servicePrincipalObjectResult;
        return this;
    }
    public Long statusCode;
    public ApplicationsGetServicePrincipalsIdByAppIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}