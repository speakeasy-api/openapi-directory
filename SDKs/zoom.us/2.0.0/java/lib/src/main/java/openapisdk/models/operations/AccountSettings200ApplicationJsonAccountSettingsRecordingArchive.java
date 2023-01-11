package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsRecordingArchive
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
public class AccountSettings200ApplicationJsonAccountSettingsRecordingArchive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AccountSettings200ApplicationJsonAccountSettingsRecordingArchive withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings settings;
    public AccountSettings200ApplicationJsonAccountSettingsRecordingArchive withSettings(AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public AccountSettings200ApplicationJsonAccountSettingsRecordingArchive withType(Long type) {
        this.type = type;
        return this;
    }
}