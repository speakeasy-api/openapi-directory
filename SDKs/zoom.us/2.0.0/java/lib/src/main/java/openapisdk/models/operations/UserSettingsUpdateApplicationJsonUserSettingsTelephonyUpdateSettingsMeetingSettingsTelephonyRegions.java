package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
public class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_values")
    public String[] selectionValues;
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions withSelectionValues(String[] selectionValues) {
        this.selectionValues = selectionValues;
        return this;
    }
}