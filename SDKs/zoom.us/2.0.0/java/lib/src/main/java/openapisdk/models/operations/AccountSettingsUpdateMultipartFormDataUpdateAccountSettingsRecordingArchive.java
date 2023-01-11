package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings settings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive withSettings(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive withType(Long type) {
        this.type = type;
        return this;
    }
}