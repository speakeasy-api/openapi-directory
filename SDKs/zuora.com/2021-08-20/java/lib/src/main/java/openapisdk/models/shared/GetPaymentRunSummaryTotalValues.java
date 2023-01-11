package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunSummaryTotalValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfCreditBalance")
    public String totalValueOfCreditBalance;
    public GetPaymentRunSummaryTotalValues withTotalValueOfCreditBalance(String totalValueOfCreditBalance) {
        this.totalValueOfCreditBalance = totalValueOfCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfCreditMemos")
    public String totalValueOfCreditMemos;
    public GetPaymentRunSummaryTotalValues withTotalValueOfCreditMemos(String totalValueOfCreditMemos) {
        this.totalValueOfCreditMemos = totalValueOfCreditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfDebitMemos")
    public String totalValueOfDebitMemos;
    public GetPaymentRunSummaryTotalValues withTotalValueOfDebitMemos(String totalValueOfDebitMemos) {
        this.totalValueOfDebitMemos = totalValueOfDebitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfErrors")
    public String totalValueOfErrors;
    public GetPaymentRunSummaryTotalValues withTotalValueOfErrors(String totalValueOfErrors) {
        this.totalValueOfErrors = totalValueOfErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfInvoices")
    public String totalValueOfInvoices;
    public GetPaymentRunSummaryTotalValues withTotalValueOfInvoices(String totalValueOfInvoices) {
        this.totalValueOfInvoices = totalValueOfInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfPayments")
    public String totalValueOfPayments;
    public GetPaymentRunSummaryTotalValues withTotalValueOfPayments(String totalValueOfPayments) {
        this.totalValueOfPayments = totalValueOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfReceivables")
    public String totalValueOfReceivables;
    public GetPaymentRunSummaryTotalValues withTotalValueOfReceivables(String totalValueOfReceivables) {
        this.totalValueOfReceivables = totalValueOfReceivables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfUnappliedPayments")
    public Long totalValueOfUnappliedPayments;
    public GetPaymentRunSummaryTotalValues withTotalValueOfUnappliedPayments(Long totalValueOfUnappliedPayments) {
        this.totalValueOfUnappliedPayments = totalValueOfUnappliedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfUnprocessedDebitMemos")
    public String totalValueOfUnprocessedDebitMemos;
    public GetPaymentRunSummaryTotalValues withTotalValueOfUnprocessedDebitMemos(String totalValueOfUnprocessedDebitMemos) {
        this.totalValueOfUnprocessedDebitMemos = totalValueOfUnprocessedDebitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfUnprocessedInvoices")
    public String totalValueOfUnprocessedInvoices;
    public GetPaymentRunSummaryTotalValues withTotalValueOfUnprocessedInvoices(String totalValueOfUnprocessedInvoices) {
        this.totalValueOfUnprocessedInvoices = totalValueOfUnprocessedInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValueOfUnprocessedReceivables")
    public String totalValueOfUnprocessedReceivables;
    public GetPaymentRunSummaryTotalValues withTotalValueOfUnprocessedReceivables(String totalValueOfUnprocessedReceivables) {
        this.totalValueOfUnprocessedReceivables = totalValueOfUnprocessedReceivables;
        return this;
    }
}