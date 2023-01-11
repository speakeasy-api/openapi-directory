package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresetsUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public PresetsUserPreferencesVideosPrivacy privacy;
    public PresetsUserPreferencesVideos withPrivacy(PresetsUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}