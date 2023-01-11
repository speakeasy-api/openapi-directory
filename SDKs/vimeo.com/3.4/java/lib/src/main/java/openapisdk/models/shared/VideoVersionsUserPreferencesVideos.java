package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoVersionsUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public VideoVersionsUserPreferencesVideosPrivacy privacy;
    public VideoVersionsUserPreferencesVideos withPrivacy(VideoVersionsUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}