package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContainerAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BANK")
    public TransactionDays bank;
    public ContainerAttributes withBank(TransactionDays bank) {
        this.bank = bank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CREDITCARD")
    public TransactionDays creditcard;
    public ContainerAttributes withCreditcard(TransactionDays creditcard) {
        this.creditcard = creditcard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("INSURANCE")
    public TransactionDays insurance;
    public ContainerAttributes withInsurance(TransactionDays insurance) {
        this.insurance = insurance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("INVESTMENT")
    public TransactionDays investment;
    public ContainerAttributes withInvestment(TransactionDays investment) {
        this.investment = investment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LOAN")
    public TransactionDays loan;
    public ContainerAttributes withLoan(TransactionDays loan) {
        this.loan = loan;
        return this;
    }
}