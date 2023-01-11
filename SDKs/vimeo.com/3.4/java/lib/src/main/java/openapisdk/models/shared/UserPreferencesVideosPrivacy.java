package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public UserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public UserPreferencesVideosPrivacyCommentsEnum comments;
    public UserPreferencesVideosPrivacy withComments(UserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public UserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public UserPreferencesVideosPrivacyEmbedEnum embed;
    public UserPreferencesVideosPrivacy withEmbed(UserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public UserPreferencesVideosPrivacyViewEnum view;
    public UserPreferencesVideosPrivacy withView(UserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}