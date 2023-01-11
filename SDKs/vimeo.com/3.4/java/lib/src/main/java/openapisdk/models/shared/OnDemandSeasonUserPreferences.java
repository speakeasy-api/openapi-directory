package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandSeasonUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public OnDemandSeasonUserPreferencesVideos videos;
    public OnDemandSeasonUserPreferences withVideos(OnDemandSeasonUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}