package openapisdk.models.operations;



public class GetPayslipResponse {
    public String contentType;
    public GetPayslipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayslipObject payslipObject;
    public GetPayslipResponse withPayslipObject(openapisdk.models.shared.PayslipObject payslipObject) {
        this.payslipObject = payslipObject;
        return this;
    }
    public Long statusCode;
    public GetPayslipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}