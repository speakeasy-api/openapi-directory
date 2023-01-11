package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings
 * Settings to manage virtual background.
**/
public class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_upload_custom")
    public Boolean allowUploadCustom;
    public GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings withAllowUploadCustom(Boolean allowUploadCustom) {
        this.allowUploadCustom = allowUploadCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_videos")
    public Boolean allowVideos;
    public GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings withAllowVideos(Boolean allowVideos) {
        this.allowVideos = allowVideos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles[] files;
    public GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings withFiles(GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles[] files) {
        this.files = files;
        return this;
    }
}