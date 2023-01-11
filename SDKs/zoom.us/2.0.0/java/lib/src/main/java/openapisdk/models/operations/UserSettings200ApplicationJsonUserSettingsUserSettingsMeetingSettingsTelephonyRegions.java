package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
public class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_values")
    public String[] selectionValues;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions withSelectionValues(String[] selectionValues) {
        this.selectionValues = selectionValues;
        return this;
    }
}