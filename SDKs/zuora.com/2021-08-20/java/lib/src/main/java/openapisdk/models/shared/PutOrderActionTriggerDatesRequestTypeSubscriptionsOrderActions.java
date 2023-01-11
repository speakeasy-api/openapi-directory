package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charges")
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges[] charges;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions withCharges(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("sequence")
    public Long sequence;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDates")
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates[] triggerDates;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions withTriggerDates(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates[] triggerDates) {
        this.triggerDates = triggerDates;
        return this;
    }
}