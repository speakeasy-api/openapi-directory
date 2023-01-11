package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyEmbedTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public UploadVideoRequestBodyEmbedTitleNameEnum name;
    public UploadVideoRequestBodyEmbedTitle withName(UploadVideoRequestBodyEmbedTitleNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public UploadVideoRequestBodyEmbedTitleOwnerEnum owner;
    public UploadVideoRequestBodyEmbedTitle withOwner(UploadVideoRequestBodyEmbedTitleOwnerEnum owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portrait")
    public UploadVideoRequestBodyEmbedTitlePortraitEnum portrait;
    public UploadVideoRequestBodyEmbedTitle withPortrait(UploadVideoRequestBodyEmbedTitlePortraitEnum portrait) {
        this.portrait = portrait;
        return this;
    }
}