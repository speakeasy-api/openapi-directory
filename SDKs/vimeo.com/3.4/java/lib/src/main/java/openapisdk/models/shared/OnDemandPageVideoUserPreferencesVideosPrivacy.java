package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageVideoUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public OnDemandPageVideoUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum comments;
    public OnDemandPageVideoUserPreferencesVideosPrivacy withComments(OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public OnDemandPageVideoUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum embed;
    public OnDemandPageVideoUserPreferencesVideosPrivacy withEmbed(OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum view;
    public OnDemandPageVideoUserPreferencesVideosPrivacy withView(OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}