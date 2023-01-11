package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageColors
 * The primary and secondary colors used for rendering this On Demand page.
**/
public class OnDemandPageColors {
    @JsonProperty("primary")
    public String primary;
    public OnDemandPageColors withPrimary(String primary) {
        this.primary = primary;
        return this;
    }
    @JsonProperty("secondary")
    public String secondary;
    public OnDemandPageColors withSecondary(String secondary) {
        this.secondary = secondary;
        return this;
    }
}