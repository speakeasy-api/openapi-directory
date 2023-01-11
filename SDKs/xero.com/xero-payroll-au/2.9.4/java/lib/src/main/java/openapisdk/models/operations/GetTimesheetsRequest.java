package openapisdk.models.operations;



public class GetTimesheetsRequest {
    public GetTimesheetsQueryParams queryParams;
    public GetTimesheetsRequest withQueryParams(GetTimesheetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTimesheetsHeaders headers;
    public GetTimesheetsRequest withHeaders(GetTimesheetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTimesheetsSecurity security;
    public GetTimesheetsRequest withSecurity(GetTimesheetsSecurity security) {
        this.security = security;
        return this;
    }
}