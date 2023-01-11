package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings withFiles(AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}