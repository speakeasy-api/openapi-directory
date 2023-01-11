package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedAmount")
    public Double appliedAmount;
    public PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedAmount")
    public Double unappliedAmount;
    public PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos withUnappliedAmount(Double unappliedAmount) {
        this.unappliedAmount = unappliedAmount;
        return this;
    }
}