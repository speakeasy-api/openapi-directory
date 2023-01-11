package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public UploadVideoRequestBodyPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public UploadVideoRequestBodyPrivacyCommentsEnum comments;
    public UploadVideoRequestBodyPrivacy withComments(UploadVideoRequestBodyPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public UploadVideoRequestBodyPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public UploadVideoRequestBodyPrivacyEmbedEnum embed;
    public UploadVideoRequestBodyPrivacy withEmbed(UploadVideoRequestBodyPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public UploadVideoRequestBodyPrivacyViewEnum view;
    public UploadVideoRequestBodyPrivacy withView(UploadVideoRequestBodyPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}