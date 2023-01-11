package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrderLineItemResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItem")
    public OrderLineItem orderLineItem;
    public GetOrderLineItemResponseType withOrderLineItem(OrderLineItem orderLineItem) {
        this.orderLineItem = orderLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetOrderLineItemResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetOrderLineItemResponseTypeReasons[] reasons;
    public GetOrderLineItemResponseType withReasons(GetOrderLineItemResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetOrderLineItemResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}