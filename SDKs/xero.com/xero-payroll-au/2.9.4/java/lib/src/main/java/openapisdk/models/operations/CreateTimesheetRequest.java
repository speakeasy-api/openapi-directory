package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTimesheetRequest {
    public CreateTimesheetHeaders headers;
    public CreateTimesheetRequest withHeaders(CreateTimesheetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TimesheetInput[] request;
    public CreateTimesheetRequest withRequest(openapisdk.models.shared.TimesheetInput[] request) {
        this.request = request;
        return this;
    }
    public CreateTimesheetSecurity security;
    public CreateTimesheetRequest withSecurity(CreateTimesheetSecurity security) {
        this.security = security;
        return this;
    }
}