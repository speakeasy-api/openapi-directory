package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPots200ApplicationJson
 * Array of all active investment pots created by the investor
**/
public class GetPots200ApplicationJson {
    @JsonProperty("pots")
    public Object[] pots;
    public GetPots200ApplicationJson withPots(Object[] pots) {
        this.pots = pots;
        return this;
    }
}