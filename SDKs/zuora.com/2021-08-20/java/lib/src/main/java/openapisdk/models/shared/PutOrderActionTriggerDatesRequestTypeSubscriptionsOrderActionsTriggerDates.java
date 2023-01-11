package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum name;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates withName(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDate")
    public LocalDate triggerDate;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates withTriggerDate(LocalDate triggerDate) {
        this.triggerDate = triggerDate;
        return this;
    }
}