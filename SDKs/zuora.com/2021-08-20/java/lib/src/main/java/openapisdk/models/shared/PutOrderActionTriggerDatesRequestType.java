package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderActionTriggerDatesRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public PutOrderActionTriggerDatesRequestTypeSubscriptions[] subscriptions;
    public PutOrderActionTriggerDatesRequestType withSubscriptions(PutOrderActionTriggerDatesRequestTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}