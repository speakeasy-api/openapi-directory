package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public OnDemandPageUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public OnDemandPageUserPreferencesVideosPrivacyCommentsEnum comments;
    public OnDemandPageUserPreferencesVideosPrivacy withComments(OnDemandPageUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public OnDemandPageUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public OnDemandPageUserPreferencesVideosPrivacyEmbedEnum embed;
    public OnDemandPageUserPreferencesVideosPrivacy withEmbed(OnDemandPageUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public OnDemandPageUserPreferencesVideosPrivacyViewEnum view;
    public OnDemandPageUserPreferencesVideosPrivacy withView(OnDemandPageUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}