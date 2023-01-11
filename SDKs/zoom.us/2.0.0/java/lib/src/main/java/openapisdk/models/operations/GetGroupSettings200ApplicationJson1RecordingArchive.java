package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGroupSettings200ApplicationJson1RecordingArchive
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
public class GetGroupSettings200ApplicationJson1RecordingArchive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GetGroupSettings200ApplicationJson1RecordingArchive withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings settings;
    public GetGroupSettings200ApplicationJson1RecordingArchive withSettings(GetGroupSettings200ApplicationJson1RecordingArchiveSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public GetGroupSettings200ApplicationJson1RecordingArchive withType(Long type) {
        this.type = type;
        return this;
    }
}