package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrderResponseForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public OrderForEvergreen order;
    public GetOrderResponseForEvergreen withOrder(OrderForEvergreen order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetOrderResponseForEvergreen withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetOrderResponseForEvergreenReasons[] reasons;
    public GetOrderResponseForEvergreen withReasons(GetOrderResponseForEvergreenReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetOrderResponseForEvergreen withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}