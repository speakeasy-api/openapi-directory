package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public GroupUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public GroupUserPreferencesVideosPrivacyCommentsEnum comments;
    public GroupUserPreferencesVideosPrivacy withComments(GroupUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public GroupUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public GroupUserPreferencesVideosPrivacyEmbedEnum embed;
    public GroupUserPreferencesVideosPrivacy withEmbed(GroupUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public GroupUserPreferencesVideosPrivacyViewEnum view;
    public GroupUserPreferencesVideosPrivacy withView(GroupUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}