package openapisdk.models.operations;



public class GetPayrollCalendarsRequest {
    public GetPayrollCalendarsQueryParams queryParams;
    public GetPayrollCalendarsRequest withQueryParams(GetPayrollCalendarsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPayrollCalendarsHeaders headers;
    public GetPayrollCalendarsRequest withHeaders(GetPayrollCalendarsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayrollCalendarsSecurity security;
    public GetPayrollCalendarsRequest withSecurity(GetPayrollCalendarsSecurity security) {
        this.security = security;
        return this;
    }
}