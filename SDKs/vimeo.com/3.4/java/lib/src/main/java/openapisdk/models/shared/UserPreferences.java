package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public UserPreferencesVideos videos;
    public UserPreferences withVideos(UserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}