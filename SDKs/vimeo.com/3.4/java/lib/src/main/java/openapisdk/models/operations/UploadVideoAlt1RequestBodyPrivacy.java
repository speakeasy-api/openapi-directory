package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public UploadVideoAlt1RequestBodyPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public UploadVideoAlt1RequestBodyPrivacyCommentsEnum comments;
    public UploadVideoAlt1RequestBodyPrivacy withComments(UploadVideoAlt1RequestBodyPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public UploadVideoAlt1RequestBodyPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public UploadVideoAlt1RequestBodyPrivacyEmbedEnum embed;
    public UploadVideoAlt1RequestBodyPrivacy withEmbed(UploadVideoAlt1RequestBodyPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public UploadVideoAlt1RequestBodyPrivacyViewEnum view;
    public UploadVideoAlt1RequestBodyPrivacy withView(UploadVideoAlt1RequestBodyPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}