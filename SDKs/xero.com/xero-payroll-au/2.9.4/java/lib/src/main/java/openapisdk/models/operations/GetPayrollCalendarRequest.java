package openapisdk.models.operations;



public class GetPayrollCalendarRequest {
    public GetPayrollCalendarPathParams pathParams;
    public GetPayrollCalendarRequest withPathParams(GetPayrollCalendarPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPayrollCalendarHeaders headers;
    public GetPayrollCalendarRequest withHeaders(GetPayrollCalendarHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayrollCalendarSecurity security;
    public GetPayrollCalendarRequest withSecurity(GetPayrollCalendarSecurity security) {
        this.security = security;
        return this;
    }
}