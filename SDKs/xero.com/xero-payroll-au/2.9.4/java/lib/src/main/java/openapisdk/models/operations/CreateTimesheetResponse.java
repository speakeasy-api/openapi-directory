package openapisdk.models.operations;



public class CreateTimesheetResponse {
    public String contentType;
    public CreateTimesheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTimesheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Timesheets timesheets;
    public CreateTimesheetResponse withTimesheets(openapisdk.models.shared.Timesheets timesheets) {
        this.timesheets = timesheets;
        return this;
    }
}