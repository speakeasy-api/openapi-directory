package openapisdk.models.operations;



public class GetTimesheetResponse {
    public String contentType;
    public GetTimesheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTimesheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TimesheetObject timesheetObject;
    public GetTimesheetResponse withTimesheetObject(openapisdk.models.shared.TimesheetObject timesheetObject) {
        this.timesheetObject = timesheetObject;
        return this;
    }
}