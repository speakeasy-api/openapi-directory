package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGroupSettingsMultipartFormData1RecordingArchive
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
public class UpdateGroupSettingsMultipartFormData1RecordingArchive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateGroupSettingsMultipartFormData1RecordingArchive withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings settings;
    public UpdateGroupSettingsMultipartFormData1RecordingArchive withSettings(UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public UpdateGroupSettingsMultipartFormData1RecordingArchive withType(Long type) {
        this.type = type;
        return this;
    }
}