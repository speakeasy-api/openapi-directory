package openapisdk.models.operations;



public class GetTimesheetsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetTimesheetsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetTimesheetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTimesheetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Timesheets timesheets;
    public GetTimesheetsResponse withTimesheets(openapisdk.models.shared.Timesheets timesheets) {
        this.timesheets = timesheets;
        return this;
    }
}