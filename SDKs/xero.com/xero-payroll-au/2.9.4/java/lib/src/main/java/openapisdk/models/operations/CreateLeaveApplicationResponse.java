package openapisdk.models.operations;



public class CreateLeaveApplicationResponse {
    public String contentType;
    public CreateLeaveApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaveApplications leaveApplications;
    public CreateLeaveApplicationResponse withLeaveApplications(openapisdk.models.shared.LeaveApplications leaveApplications) {
        this.leaveApplications = leaveApplications;
        return this;
    }
    public Long statusCode;
    public CreateLeaveApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}