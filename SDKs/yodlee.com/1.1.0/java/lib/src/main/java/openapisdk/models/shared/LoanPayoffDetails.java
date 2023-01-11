package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LoanPayoffDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outstandingBalance")
    public Money outstandingBalance;
    public LoanPayoffDetails withOutstandingBalance(Money outstandingBalance) {
        this.outstandingBalance = outstandingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payByDate")
    public String payByDate;
    public LoanPayoffDetails withPayByDate(String payByDate) {
        this.payByDate = payByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoffAmount")
    public Money payoffAmount;
    public LoanPayoffDetails withPayoffAmount(Money payoffAmount) {
        this.payoffAmount = payoffAmount;
        return this;
    }
}