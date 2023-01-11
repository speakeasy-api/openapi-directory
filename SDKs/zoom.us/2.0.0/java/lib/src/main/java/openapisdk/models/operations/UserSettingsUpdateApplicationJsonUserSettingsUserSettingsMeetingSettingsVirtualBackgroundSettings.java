package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withFiles(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}