package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings withFiles(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}