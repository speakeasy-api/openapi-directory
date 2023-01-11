package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public OnDemandPageUserPreferencesVideosPrivacy privacy;
    public OnDemandPageUserPreferencesVideos withPrivacy(OnDemandPageUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}