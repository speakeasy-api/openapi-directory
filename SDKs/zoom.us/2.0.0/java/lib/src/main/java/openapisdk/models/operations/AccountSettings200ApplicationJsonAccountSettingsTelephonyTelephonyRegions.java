package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
public class AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_values")
    public String[] selectionValues;
    public AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions withSelectionValues(String[] selectionValues) {
        this.selectionValues = selectionValues;
        return this;
    }
}