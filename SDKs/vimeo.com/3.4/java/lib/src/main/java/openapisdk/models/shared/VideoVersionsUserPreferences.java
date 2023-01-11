package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoVersionsUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public VideoVersionsUserPreferencesVideos videos;
    public VideoVersionsUserPreferences withVideos(VideoVersionsUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}