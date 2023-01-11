package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentUserPreferencesVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CommentUserPreferencesVideosPrivacy privacy;
    public CommentUserPreferencesVideos withPrivacy(CommentUserPreferencesVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}