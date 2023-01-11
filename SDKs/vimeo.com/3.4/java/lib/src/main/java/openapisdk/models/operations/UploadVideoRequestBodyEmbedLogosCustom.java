package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyEmbedLogosCustom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UploadVideoRequestBodyEmbedLogosCustom withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public UploadVideoRequestBodyEmbedLogosCustom withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky")
    public Boolean sticky;
    public UploadVideoRequestBodyEmbedLogosCustom withSticky(Boolean sticky) {
        this.sticky = sticky;
        return this;
    }
}