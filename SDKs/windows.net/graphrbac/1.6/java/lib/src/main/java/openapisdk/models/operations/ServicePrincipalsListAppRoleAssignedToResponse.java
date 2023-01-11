package openapisdk.models.operations;



public class ServicePrincipalsListAppRoleAssignedToResponse {
    public openapisdk.models.shared.AppRoleAssignmentListResult appRoleAssignmentListResult;
    public ServicePrincipalsListAppRoleAssignedToResponse withAppRoleAssignmentListResult(openapisdk.models.shared.AppRoleAssignmentListResult appRoleAssignmentListResult) {
        this.appRoleAssignmentListResult = appRoleAssignmentListResult;
        return this;
    }
    public String contentType;
    public ServicePrincipalsListAppRoleAssignedToResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsListAppRoleAssignedToResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsListAppRoleAssignedToResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}