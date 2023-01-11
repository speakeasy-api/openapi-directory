package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderTriggerParams
 * Specifies when a charge becomes active.
 * 
**/
public class PreviewOrderTriggerParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificTriggerDate")
    public LocalDate specificTriggerDate;
    public PreviewOrderTriggerParams withSpecificTriggerDate(LocalDate specificTriggerDate) {
        this.specificTriggerDate = specificTriggerDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerEvent")
    public PreviewOrderTriggerParamsTriggerEventEnum triggerEvent;
    public PreviewOrderTriggerParams withTriggerEvent(PreviewOrderTriggerParamsTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}