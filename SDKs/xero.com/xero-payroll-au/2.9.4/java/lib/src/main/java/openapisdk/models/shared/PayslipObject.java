package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayslipObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payslip")
    public Payslip payslip;
    public PayslipObject withPayslip(Payslip payslip) {
        this.payslip = payslip;
        return this;
    }
}