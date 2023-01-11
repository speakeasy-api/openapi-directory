package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public VideoUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public VideoUserPreferencesVideosPrivacyCommentsEnum comments;
    public VideoUserPreferencesVideosPrivacy withComments(VideoUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public VideoUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public VideoUserPreferencesVideosPrivacyEmbedEnum embed;
    public VideoUserPreferencesVideosPrivacy withEmbed(VideoUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public VideoUserPreferencesVideosPrivacyViewEnum view;
    public VideoUserPreferencesVideosPrivacy withView(VideoUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}