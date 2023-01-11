package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderTriggerParams
 * Specifies when a charge becomes active.
 * 
**/
public class CreateOrderTriggerParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificTriggerDate")
    public LocalDate specificTriggerDate;
    public CreateOrderTriggerParams withSpecificTriggerDate(LocalDate specificTriggerDate) {
        this.specificTriggerDate = specificTriggerDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerEvent")
    public CreateOrderTriggerParamsTriggerEventEnum triggerEvent;
    public CreateOrderTriggerParams withTriggerEvent(CreateOrderTriggerParamsTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}