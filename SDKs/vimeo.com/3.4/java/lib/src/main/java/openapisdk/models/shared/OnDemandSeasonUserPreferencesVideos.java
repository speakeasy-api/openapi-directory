package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandSeasonUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public OnDemandSeasonUserPreferencesVideosPrivacy privacy;
    public OnDemandSeasonUserPreferencesVideos withPrivacy(OnDemandSeasonUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}