package openapisdk.models.operations;



public class CreatePayrollCalendarResponse {
    public String contentType;
    public CreatePayrollCalendarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayrollCalendars payrollCalendars;
    public CreatePayrollCalendarResponse withPayrollCalendars(openapisdk.models.shared.PayrollCalendars payrollCalendars) {
        this.payrollCalendars = payrollCalendars;
        return this;
    }
    public Long statusCode;
    public CreatePayrollCalendarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}