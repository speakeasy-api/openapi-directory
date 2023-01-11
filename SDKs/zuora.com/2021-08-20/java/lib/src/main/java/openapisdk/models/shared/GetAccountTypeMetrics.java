package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountTypeMetrics
 * Container for account metrics.
 * 
**/
public class GetAccountTypeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public String balance;
    public GetAccountTypeMetrics withBalance(String balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractedMrr")
    public String contractedMrr;
    public GetAccountTypeMetrics withContractedMrr(String contractedMrr) {
        this.contractedMrr = contractedMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditBalance")
    public String creditBalance;
    public GetAccountTypeMetrics withCreditBalance(String creditBalance) {
        this.creditBalance = creditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDebitMemoBalance")
    public String totalDebitMemoBalance;
    public GetAccountTypeMetrics withTotalDebitMemoBalance(String totalDebitMemoBalance) {
        this.totalDebitMemoBalance = totalDebitMemoBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalInvoiceBalance")
    public String totalInvoiceBalance;
    public GetAccountTypeMetrics withTotalInvoiceBalance(String totalInvoiceBalance) {
        this.totalInvoiceBalance = totalInvoiceBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedCreditMemoAmount")
    public String unappliedCreditMemoAmount;
    public GetAccountTypeMetrics withUnappliedCreditMemoAmount(String unappliedCreditMemoAmount) {
        this.unappliedCreditMemoAmount = unappliedCreditMemoAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAmount")
    public String unappliedPaymentAmount;
    public GetAccountTypeMetrics withUnappliedPaymentAmount(String unappliedPaymentAmount) {
        this.unappliedPaymentAmount = unappliedPaymentAmount;
        return this;
    }
}