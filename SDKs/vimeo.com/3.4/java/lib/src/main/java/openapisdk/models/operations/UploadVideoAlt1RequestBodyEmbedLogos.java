package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyEmbedLogos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public UploadVideoAlt1RequestBodyEmbedLogosCustom custom;
    public UploadVideoAlt1RequestBodyEmbedLogos withCustom(UploadVideoAlt1RequestBodyEmbedLogosCustom custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vimeo")
    public Boolean vimeo;
    public UploadVideoAlt1RequestBodyEmbedLogos withVimeo(Boolean vimeo) {
        this.vimeo = vimeo;
        return this;
    }
}