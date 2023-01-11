package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderUpdateProductTriggerParams
 * Specifies when a charge becomes active.
 * 
**/
public class CreateOrderUpdateProductTriggerParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificTriggerDate")
    public LocalDate specificTriggerDate;
    public CreateOrderUpdateProductTriggerParams withSpecificTriggerDate(LocalDate specificTriggerDate) {
        this.specificTriggerDate = specificTriggerDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerEvent")
    public CreateOrderUpdateProductTriggerParamsTriggerEventEnum triggerEvent;
    public CreateOrderUpdateProductTriggerParams withTriggerEvent(CreateOrderUpdateProductTriggerParamsTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}