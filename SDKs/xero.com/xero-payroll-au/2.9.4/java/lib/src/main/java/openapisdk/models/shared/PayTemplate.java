package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeductionLines")
    public DeductionLine[] deductionLines;
    public PayTemplate withDeductionLines(DeductionLine[] deductionLines) {
        this.deductionLines = deductionLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsLines")
    public EarningsLine[] earningsLines;
    public PayTemplate withEarningsLines(EarningsLine[] earningsLines) {
        this.earningsLines = earningsLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveLines")
    public LeaveLine[] leaveLines;
    public PayTemplate withLeaveLines(LeaveLine[] leaveLines) {
        this.leaveLines = leaveLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReimbursementLines")
    public ReimbursementLine[] reimbursementLines;
    public PayTemplate withReimbursementLines(ReimbursementLine[] reimbursementLines) {
        this.reimbursementLines = reimbursementLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperLines")
    public SuperLine[] superLines;
    public PayTemplate withSuperLines(SuperLine[] superLines) {
        this.superLines = superLines;
        return this;
    }
}