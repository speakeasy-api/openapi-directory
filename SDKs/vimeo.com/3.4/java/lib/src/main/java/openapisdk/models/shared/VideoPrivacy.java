package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoPrivacy
 * The video's privacy setting.
**/
public class VideoPrivacy {
    @JsonProperty("add")
    public Boolean add;
    public VideoPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonProperty("comments")
    public VideoPrivacyCommentsEnum comments;
    public VideoPrivacy withComments(VideoPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("download")
    public Boolean download;
    public VideoPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonProperty("embed")
    public VideoPrivacyEmbedEnum embed;
    public VideoPrivacy withEmbed(VideoPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("view")
    public VideoPrivacyViewEnum view;
    public VideoPrivacy withView(VideoPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}