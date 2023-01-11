package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTimesheetRequest {
    public UpdateTimesheetPathParams pathParams;
    public UpdateTimesheetRequest withPathParams(UpdateTimesheetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTimesheetHeaders headers;
    public UpdateTimesheetRequest withHeaders(UpdateTimesheetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TimesheetInput[] request;
    public UpdateTimesheetRequest withRequest(openapisdk.models.shared.TimesheetInput[] request) {
        this.request = request;
        return this;
    }
    public UpdateTimesheetSecurity security;
    public UpdateTimesheetRequest withSecurity(UpdateTimesheetSecurity security) {
        this.security = security;
        return this;
    }
}