package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public VideoUserPreferencesVideosPrivacy privacy;
    public VideoUserPreferencesVideos withPrivacy(VideoUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}