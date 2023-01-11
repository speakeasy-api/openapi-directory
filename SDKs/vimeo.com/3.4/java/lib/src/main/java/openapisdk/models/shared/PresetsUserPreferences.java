package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresetsUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public PresetsUserPreferencesVideos videos;
    public PresetsUserPreferences withVideos(PresetsUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}