package openapisdk.models.operations;



public class GetLeaveApplicationResponse {
    public String contentType;
    public GetLeaveApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaveApplications leaveApplications;
    public GetLeaveApplicationResponse withLeaveApplications(openapisdk.models.shared.LeaveApplications leaveApplications) {
        this.leaveApplications = leaveApplications;
        return this;
    }
    public Long statusCode;
    public GetLeaveApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}