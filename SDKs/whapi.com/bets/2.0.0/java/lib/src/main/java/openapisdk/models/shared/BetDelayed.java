package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BetDelayed {
    @JsonProperty("delayPeriodSeconds")
    public Long delayPeriodSeconds;
    public BetDelayed withDelayPeriodSeconds(Long delayPeriodSeconds) {
        this.delayPeriodSeconds = delayPeriodSeconds;
        return this;
    }
    @JsonProperty("delayedBetId")
    public String delayedBetId;
    public BetDelayed withDelayedBetId(String delayedBetId) {
        this.delayedBetId = delayedBetId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BetDelayed withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Double number;
    public BetDelayed withNumber(Double number) {
        this.number = number;
        return this;
    }
}