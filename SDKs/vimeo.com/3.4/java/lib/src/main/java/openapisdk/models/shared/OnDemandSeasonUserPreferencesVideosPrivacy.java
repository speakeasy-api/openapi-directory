package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandSeasonUserPreferencesVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public OnDemandSeasonUserPreferencesVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum comments;
    public OnDemandSeasonUserPreferencesVideosPrivacy withComments(OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public OnDemandSeasonUserPreferencesVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum embed;
    public OnDemandSeasonUserPreferencesVideosPrivacy withEmbed(OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public OnDemandSeasonUserPreferencesVideosPrivacyViewEnum view;
    public OnDemandSeasonUserPreferencesVideosPrivacy withView(OnDemandSeasonUserPreferencesVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}