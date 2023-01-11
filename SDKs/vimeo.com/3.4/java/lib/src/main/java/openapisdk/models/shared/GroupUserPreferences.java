package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUserPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public GroupUserPreferencesVideos videos;
    public GroupUserPreferences withVideos(GroupUserPreferencesVideos videos) {
        this.videos = videos;
        return this;
    }
}