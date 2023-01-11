package openapisdk.models.operations;



public class GetLeaveApplicationsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetLeaveApplicationsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetLeaveApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaveApplications leaveApplications;
    public GetLeaveApplicationsResponse withLeaveApplications(openapisdk.models.shared.LeaveApplications leaveApplications) {
        this.leaveApplications = leaveApplications;
        return this;
    }
    public Long statusCode;
    public GetLeaveApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}