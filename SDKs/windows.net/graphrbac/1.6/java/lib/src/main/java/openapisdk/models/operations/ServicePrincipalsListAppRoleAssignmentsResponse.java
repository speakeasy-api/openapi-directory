package openapisdk.models.operations;



public class ServicePrincipalsListAppRoleAssignmentsResponse {
    public openapisdk.models.shared.AppRoleAssignmentListResult appRoleAssignmentListResult;
    public ServicePrincipalsListAppRoleAssignmentsResponse withAppRoleAssignmentListResult(openapisdk.models.shared.AppRoleAssignmentListResult appRoleAssignmentListResult) {
        this.appRoleAssignmentListResult = appRoleAssignmentListResult;
        return this;
    }
    public String contentType;
    public ServicePrincipalsListAppRoleAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsListAppRoleAssignmentsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsListAppRoleAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}