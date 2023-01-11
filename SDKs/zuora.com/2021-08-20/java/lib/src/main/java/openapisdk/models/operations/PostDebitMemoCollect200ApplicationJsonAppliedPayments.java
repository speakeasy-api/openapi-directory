package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDebitMemoCollect200ApplicationJsonAppliedPayments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedAmount")
    public Double appliedAmount;
    public PostDebitMemoCollect200ApplicationJsonAppliedPayments withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostDebitMemoCollect200ApplicationJsonAppliedPayments withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostDebitMemoCollect200ApplicationJsonAppliedPayments withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedAmount")
    public Double unappliedAmount;
    public PostDebitMemoCollect200ApplicationJsonAppliedPayments withUnappliedAmount(Double unappliedAmount) {
        this.unappliedAmount = unappliedAmount;
        return this;
    }
}