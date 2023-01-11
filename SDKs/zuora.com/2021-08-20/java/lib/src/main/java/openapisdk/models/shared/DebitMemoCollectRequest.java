package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DebitMemoCollectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public DebitMemoCollectRequest withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public DebitMemoCollectRequest withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect")
    public Boolean collect;
    public DebitMemoCollectRequest withCollect(Boolean collect) {
        this.collect = collect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment")
    public DebitMemoCollectRequestPayment payment;
    public DebitMemoCollectRequest withPayment(DebitMemoCollectRequestPayment payment) {
        this.payment = payment;
        return this;
    }
}