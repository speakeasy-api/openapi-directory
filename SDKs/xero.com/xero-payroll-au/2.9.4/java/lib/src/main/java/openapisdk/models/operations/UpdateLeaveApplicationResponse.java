package openapisdk.models.operations;



public class UpdateLeaveApplicationResponse {
    public String contentType;
    public UpdateLeaveApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaveApplications leaveApplications;
    public UpdateLeaveApplicationResponse withLeaveApplications(openapisdk.models.shared.LeaveApplications leaveApplications) {
        this.leaveApplications = leaveApplications;
        return this;
    }
    public Long statusCode;
    public UpdateLeaveApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}