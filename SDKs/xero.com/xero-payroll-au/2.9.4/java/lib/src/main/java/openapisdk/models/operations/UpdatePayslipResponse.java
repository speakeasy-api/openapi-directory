package openapisdk.models.operations;



public class UpdatePayslipResponse {
    public String contentType;
    public UpdatePayslipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Payslips payslips;
    public UpdatePayslipResponse withPayslips(openapisdk.models.shared.Payslips payslips) {
        this.payslips = payslips;
        return this;
    }
    public Long statusCode;
    public UpdatePayslipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}