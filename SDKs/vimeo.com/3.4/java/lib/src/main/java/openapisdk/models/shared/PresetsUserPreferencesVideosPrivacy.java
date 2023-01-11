package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresetsUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public PresetsUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public PresetsUserPreferencesVideosPrivacyCommentsEnum comments;
    public PresetsUserPreferencesVideosPrivacy withComments(PresetsUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public PresetsUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public PresetsUserPreferencesVideosPrivacyEmbedEnum embed;
    public PresetsUserPreferencesVideosPrivacy withEmbed(PresetsUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public PresetsUserPreferencesVideosPrivacyViewEnum view;
    public PresetsUserPreferencesVideosPrivacy withView(PresetsUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}