package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withFiles(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}