package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings withFiles(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}