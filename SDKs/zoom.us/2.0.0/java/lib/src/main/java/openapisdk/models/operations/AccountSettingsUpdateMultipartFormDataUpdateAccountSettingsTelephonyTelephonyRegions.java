package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection_values")
    public String[] selectionValues;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions withSelectionValues(String[] selectionValues) {
        this.selectionValues = selectionValues;
        return this;
    }
}