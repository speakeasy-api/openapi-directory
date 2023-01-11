package openapisdk.models.operations;



public class UpdateTimesheetResponse {
    public String contentType;
    public UpdateTimesheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTimesheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Timesheets timesheets;
    public UpdateTimesheetResponse withTimesheets(openapisdk.models.shared.Timesheets timesheets) {
        this.timesheets = timesheets;
        return this;
    }
}