package openapisdk.models.operations;



public class GetLeaveApplicationsRequest {
    public GetLeaveApplicationsQueryParams queryParams;
    public GetLeaveApplicationsRequest withQueryParams(GetLeaveApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLeaveApplicationsHeaders headers;
    public GetLeaveApplicationsRequest withHeaders(GetLeaveApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetLeaveApplicationsSecurity security;
    public GetLeaveApplicationsRequest withSecurity(GetLeaveApplicationsSecurity security) {
        this.security = security;
        return this;
    }
}