package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayrollCalendarRequest {
    public CreatePayrollCalendarHeaders headers;
    public CreatePayrollCalendarRequest withHeaders(CreatePayrollCalendarHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayrollCalendarInput[] request;
    public CreatePayrollCalendarRequest withRequest(openapisdk.models.shared.PayrollCalendarInput[] request) {
        this.request = request;
        return this;
    }
    public CreatePayrollCalendarSecurity security;
    public CreatePayrollCalendarRequest withSecurity(CreatePayrollCalendarSecurity security) {
        this.security = security;
        return this;
    }
}