package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings withFiles(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}