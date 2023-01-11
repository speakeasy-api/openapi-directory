package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoVersionsUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public VideoVersionsUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public VideoVersionsUserPreferencesVideosPrivacyCommentsEnum comments;
    public VideoVersionsUserPreferencesVideosPrivacy withComments(VideoVersionsUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public VideoVersionsUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public VideoVersionsUserPreferencesVideosPrivacyEmbedEnum embed;
    public VideoVersionsUserPreferencesVideosPrivacy withEmbed(VideoVersionsUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public VideoVersionsUserPreferencesVideosPrivacyViewEnum view;
    public VideoVersionsUserPreferencesVideosPrivacy withView(VideoVersionsUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}