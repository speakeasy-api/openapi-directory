package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderTriggerDatesResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PutOrderTriggerDatesResponseType withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public PutOrderTriggerDatesResponseType withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public PutOrderTriggerDatesResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public PutOrderTriggerDatesResponseTypeReasons[] reasons;
    public PutOrderTriggerDatesResponseType withReasons(PutOrderTriggerDatesResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PutOrderTriggerDatesResponseTypeStatusEnum status;
    public PutOrderTriggerDatesResponseType withStatus(PutOrderTriggerDatesResponseTypeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public PutOrderTriggerDatesResponseTypeSubscriptions[] subscriptions;
    public PutOrderTriggerDatesResponseType withSubscriptions(PutOrderTriggerDatesResponseTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutOrderTriggerDatesResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}