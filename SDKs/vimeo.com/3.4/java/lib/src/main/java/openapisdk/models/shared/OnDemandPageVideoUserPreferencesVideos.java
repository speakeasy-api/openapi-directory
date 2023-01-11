package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageVideoUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public OnDemandPageVideoUserPreferencesVideosPrivacy privacy;
    public OnDemandPageVideoUserPreferencesVideos withPrivacy(OnDemandPageVideoUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}