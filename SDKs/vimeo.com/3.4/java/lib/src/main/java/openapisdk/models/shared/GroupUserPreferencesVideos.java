package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public GroupUserPreferencesVideosPrivacy privacy;
    public GroupUserPreferencesVideos withPrivacy(GroupUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}