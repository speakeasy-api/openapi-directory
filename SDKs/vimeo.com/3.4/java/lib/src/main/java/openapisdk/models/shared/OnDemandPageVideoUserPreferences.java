package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageVideoUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public OnDemandPageVideoUserPreferencesVideos videos;
    public OnDemandPageVideoUserPreferences withVideos(OnDemandPageVideoUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}