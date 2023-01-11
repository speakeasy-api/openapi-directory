package openapisdk.models.operations;



public class UserApiPostReportRequest {
    public UserApiPostReportPathParams pathParams;
    public UserApiPostReportRequest withPathParams(UserApiPostReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserApiPostReportRequests request;
    public UserApiPostReportRequest withRequest(UserApiPostReportRequests request) {
        this.request = request;
        return this;
    }
}