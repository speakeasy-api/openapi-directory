package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyEmbedTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public UploadVideoAlt1RequestBodyEmbedTitleNameEnum name;
    public UploadVideoAlt1RequestBodyEmbedTitle withName(UploadVideoAlt1RequestBodyEmbedTitleNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum owner;
    public UploadVideoAlt1RequestBodyEmbedTitle withOwner(UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portrait")
    public UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum portrait;
    public UploadVideoAlt1RequestBodyEmbedTitle withPortrait(UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum portrait) {
        this.portrait = portrait;
        return this;
    }
}