package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TriggerDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public TriggerDateNameEnum name;
    public TriggerDate withName(TriggerDateNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDate")
    public LocalDate triggerDate;
    public TriggerDate withTriggerDate(LocalDate triggerDate) {
        this.triggerDate = triggerDate;
        return this;
    }
}