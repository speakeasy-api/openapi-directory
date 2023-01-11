package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyEmbedLogos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public UploadVideoRequestBodyEmbedLogosCustom custom;
    public UploadVideoRequestBodyEmbedLogos withCustom(UploadVideoRequestBodyEmbedLogosCustom custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vimeo")
    public Boolean vimeo;
    public UploadVideoRequestBodyEmbedLogos withVimeo(Boolean vimeo) {
        this.vimeo = vimeo;
        return this;
    }
}