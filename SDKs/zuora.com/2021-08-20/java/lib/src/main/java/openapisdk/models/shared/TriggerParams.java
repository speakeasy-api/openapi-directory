package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerParams
 * Specifies when a charge becomes active.
 * 
**/
public class TriggerParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificTriggerDate")
    public LocalDate specificTriggerDate;
    public TriggerParams withSpecificTriggerDate(LocalDate specificTriggerDate) {
        this.specificTriggerDate = specificTriggerDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerEvent")
    public TriggerParamsTriggerEventEnum triggerEvent;
    public TriggerParams withTriggerEvent(TriggerParamsTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}