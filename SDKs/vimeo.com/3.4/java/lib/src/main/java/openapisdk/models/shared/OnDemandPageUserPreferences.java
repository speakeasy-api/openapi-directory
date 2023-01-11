package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public OnDemandPageUserPreferencesVideos videos;
    public OnDemandPageUserPreferences withVideos(OnDemandPageUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}