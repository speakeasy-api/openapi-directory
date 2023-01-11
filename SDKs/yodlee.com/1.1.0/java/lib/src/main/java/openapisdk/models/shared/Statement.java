package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Statement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public Statement withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDue")
    public Money amountDue;
    public Statement withAmountDue(Money amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apr")
    public Double apr;
    public Statement withApr(Double apr) {
        this.apr = apr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodEnd")
    public String billingPeriodEnd;
    public Statement withBillingPeriodEnd(String billingPeriodEnd) {
        this.billingPeriodEnd = billingPeriodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodStart")
    public String billingPeriodStart;
    public Statement withBillingPeriodStart(String billingPeriodStart) {
        this.billingPeriodStart = billingPeriodStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashAdvance")
    public Money cashAdvance;
    public Statement withCashAdvance(Money cashAdvance) {
        this.cashAdvance = cashAdvance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashApr")
    public Double cashApr;
    public Statement withCashApr(Double cashApr) {
        this.cashApr = cashApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public Statement withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Statement withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestAmount")
    public Money interestAmount;
    public Statement withInterestAmount(Money interestAmount) {
        this.interestAmount = interestAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLatest")
    public Boolean isLatest;
    public Statement withIsLatest(Boolean isLatest) {
        this.isLatest = isLatest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentAmount")
    public Money lastPaymentAmount;
    public Statement withLastPaymentAmount(Money lastPaymentAmount) {
        this.lastPaymentAmount = lastPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentDate")
    public String lastPaymentDate;
    public Statement withLastPaymentDate(String lastPaymentDate) {
        this.lastPaymentDate = lastPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public Statement withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanBalance")
    public Money loanBalance;
    public Statement withLoanBalance(Money loanBalance) {
        this.loanBalance = loanBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPayment")
    public Money minimumPayment;
    public Statement withMinimumPayment(Money minimumPayment) {
        this.minimumPayment = minimumPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newCharges")
    public Money newCharges;
    public Statement withNewCharges(Money newCharges) {
        this.newCharges = newCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalAmount")
    public Money principalAmount;
    public Statement withPrincipalAmount(Money principalAmount) {
        this.principalAmount = principalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statementDate")
    public String statementDate;
    public Statement withStatementDate(String statementDate) {
        this.statementDate = statementDate;
        return this;
    }
}