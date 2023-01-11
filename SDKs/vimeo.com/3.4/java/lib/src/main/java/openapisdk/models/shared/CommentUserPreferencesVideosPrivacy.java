package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public CommentUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public CommentUserPreferencesVideosPrivacyCommentsEnum comments;
    public CommentUserPreferencesVideosPrivacy withComments(CommentUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public CommentUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public CommentUserPreferencesVideosPrivacyEmbedEnum embed;
    public CommentUserPreferencesVideosPrivacy withEmbed(CommentUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public CommentUserPreferencesVideosPrivacyViewEnum view;
    public CommentUserPreferencesVideosPrivacy withView(CommentUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}