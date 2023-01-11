package openapisdk.models.operations;



public class GetPayrollCalendarsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetPayrollCalendarsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetPayrollCalendarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayrollCalendars payrollCalendars;
    public GetPayrollCalendarsResponse withPayrollCalendars(openapisdk.models.shared.PayrollCalendars payrollCalendars) {
        this.payrollCalendars = payrollCalendars;
        return this;
    }
    public Long statusCode;
    public GetPayrollCalendarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}