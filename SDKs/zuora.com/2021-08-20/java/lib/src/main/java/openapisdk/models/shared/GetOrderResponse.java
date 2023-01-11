package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Order order;
    public GetOrderResponse withOrder(Order order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetOrderResponse withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetOrderResponseReasons[] reasons;
    public GetOrderResponse withReasons(GetOrderResponseReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetOrderResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}