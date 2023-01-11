package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfCreditBalanceAdjustments")
    public Long numberOfCreditBalanceAdjustments;
    public GetPaymentRunSummaryResponse withNumberOfCreditBalanceAdjustments(Long numberOfCreditBalanceAdjustments) {
        this.numberOfCreditBalanceAdjustments = numberOfCreditBalanceAdjustments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfCreditMemos")
    public Long numberOfCreditMemos;
    public GetPaymentRunSummaryResponse withNumberOfCreditMemos(Long numberOfCreditMemos) {
        this.numberOfCreditMemos = numberOfCreditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfDebitMemos")
    public Long numberOfDebitMemos;
    public GetPaymentRunSummaryResponse withNumberOfDebitMemos(Long numberOfDebitMemos) {
        this.numberOfDebitMemos = numberOfDebitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfErrorInputData")
    public Long numberOfErrorInputData;
    public GetPaymentRunSummaryResponse withNumberOfErrorInputData(Long numberOfErrorInputData) {
        this.numberOfErrorInputData = numberOfErrorInputData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfErrors")
    public Long numberOfErrors;
    public GetPaymentRunSummaryResponse withNumberOfErrors(Long numberOfErrors) {
        this.numberOfErrors = numberOfErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfInputData")
    public Long numberOfInputData;
    public GetPaymentRunSummaryResponse withNumberOfInputData(Long numberOfInputData) {
        this.numberOfInputData = numberOfInputData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfInvoices")
    public Long numberOfInvoices;
    public GetPaymentRunSummaryResponse withNumberOfInvoices(Long numberOfInvoices) {
        this.numberOfInvoices = numberOfInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPayments")
    public Long numberOfPayments;
    public GetPaymentRunSummaryResponse withNumberOfPayments(Long numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfProcessedInputData")
    public Long numberOfProcessedInputData;
    public GetPaymentRunSummaryResponse withNumberOfProcessedInputData(Long numberOfProcessedInputData) {
        this.numberOfProcessedInputData = numberOfProcessedInputData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfReceivables")
    public Long numberOfReceivables;
    public GetPaymentRunSummaryResponse withNumberOfReceivables(Long numberOfReceivables) {
        this.numberOfReceivables = numberOfReceivables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfUnappliedPayments")
    public Long numberOfUnappliedPayments;
    public GetPaymentRunSummaryResponse withNumberOfUnappliedPayments(Long numberOfUnappliedPayments) {
        this.numberOfUnappliedPayments = numberOfUnappliedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfUnprocessedDebitMemos")
    public Long numberOfUnprocessedDebitMemos;
    public GetPaymentRunSummaryResponse withNumberOfUnprocessedDebitMemos(Long numberOfUnprocessedDebitMemos) {
        this.numberOfUnprocessedDebitMemos = numberOfUnprocessedDebitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfUnprocessedInvoices")
    public Long numberOfUnprocessedInvoices;
    public GetPaymentRunSummaryResponse withNumberOfUnprocessedInvoices(Long numberOfUnprocessedInvoices) {
        this.numberOfUnprocessedInvoices = numberOfUnprocessedInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfUnprocessedReceivables")
    public Long numberOfUnprocessedReceivables;
    public GetPaymentRunSummaryResponse withNumberOfUnprocessedReceivables(Long numberOfUnprocessedReceivables) {
        this.numberOfUnprocessedReceivables = numberOfUnprocessedReceivables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentRunSummaryResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValues")
    public GetPaymentRunSummaryTotalValues[] totalValues;
    public GetPaymentRunSummaryResponse withTotalValues(GetPaymentRunSummaryTotalValues[] totalValues) {
        this.totalValues = totalValues;
        return this;
    }
}