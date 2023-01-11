package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public VideoUserPreferencesVideos videos;
    public VideoUserPreferences withVideos(VideoUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}