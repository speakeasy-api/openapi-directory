package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoPrivacy
 * The video's privacy setting.
**/
public class OnDemandPageVideoPrivacy {
    @JsonProperty("add")
    public Boolean add;
    public OnDemandPageVideoPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonProperty("comments")
    public OnDemandPageVideoPrivacyCommentsEnum comments;
    public OnDemandPageVideoPrivacy withComments(OnDemandPageVideoPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("download")
    public Boolean download;
    public OnDemandPageVideoPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonProperty("embed")
    public OnDemandPageVideoPrivacyEmbedEnum embed;
    public OnDemandPageVideoPrivacy withEmbed(OnDemandPageVideoPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("view")
    public OnDemandPageVideoPrivacyViewEnum view;
    public OnDemandPageVideoPrivacy withView(OnDemandPageVideoPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}