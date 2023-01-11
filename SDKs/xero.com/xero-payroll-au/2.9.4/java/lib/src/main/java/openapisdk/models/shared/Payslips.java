package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Payslips {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payslips")
    public Payslip[] payslips;
    public Payslips withPayslips(Payslip[] payslips) {
        this.payslips = payslips;
        return this;
    }
}