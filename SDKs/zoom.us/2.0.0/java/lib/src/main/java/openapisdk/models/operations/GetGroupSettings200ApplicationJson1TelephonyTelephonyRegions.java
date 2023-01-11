package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
public class GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_values")
    public String[] selectionValues;
    public GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions withSelectionValues(String[] selectionValues) {
        this.selectionValues = selectionValues;
        return this;
    }
}