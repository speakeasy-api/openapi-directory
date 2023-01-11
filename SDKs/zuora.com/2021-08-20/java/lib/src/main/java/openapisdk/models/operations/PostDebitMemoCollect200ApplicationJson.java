package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDebitMemoCollect200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCreditMemos")
    public PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos[] appliedCreditMemos;
    public PostDebitMemoCollect200ApplicationJson withAppliedCreditMemos(PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos[] appliedCreditMemos) {
        this.appliedCreditMemos = appliedCreditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedPayments")
    public PostDebitMemoCollect200ApplicationJsonAppliedPayments[] appliedPayments;
    public PostDebitMemoCollect200ApplicationJson withAppliedPayments(PostDebitMemoCollect200ApplicationJsonAppliedPayments[] appliedPayments) {
        this.appliedPayments = appliedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemo")
    public PostDebitMemoCollect200ApplicationJsonDebitMemo debitMemo;
    public PostDebitMemoCollect200ApplicationJson withDebitMemo(PostDebitMemoCollect200ApplicationJsonDebitMemo debitMemo) {
        this.debitMemo = debitMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processedPayment")
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment processedPayment;
    public PostDebitMemoCollect200ApplicationJson withProcessedPayment(PostDebitMemoCollect200ApplicationJsonProcessedPayment processedPayment) {
        this.processedPayment = processedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostDebitMemoCollect200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}