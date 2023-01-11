package openapisdk.models.operations;



public class GetPayrollCalendarResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetPayrollCalendarResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetPayrollCalendarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayrollCalendars payrollCalendars;
    public GetPayrollCalendarResponse withPayrollCalendars(openapisdk.models.shared.PayrollCalendars payrollCalendars) {
        this.payrollCalendars = payrollCalendars;
        return this;
    }
    public Long statusCode;
    public GetPayrollCalendarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}