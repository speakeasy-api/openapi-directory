package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public UserPreferencesVideosPrivacy privacy;
    public UserPreferencesVideos withPrivacy(UserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}