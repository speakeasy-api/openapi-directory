package openapisdk.models.operations;



public class ReportMeetingsRequest {
    public ReportMeetingsPathParams pathParams;
    public ReportMeetingsRequest withPathParams(ReportMeetingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportMeetingsQueryParams queryParams;
    public ReportMeetingsRequest withQueryParams(ReportMeetingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}