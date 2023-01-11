package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Picture {
    @JsonProperty("active")
    public Boolean active;
    public Picture withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Picture withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Picture withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("sizes")
    public PictureSizes[] sizes;
    public Picture withSizes(PictureSizes[] sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("type")
    public PictureTypeEnum type;
    public Picture withType(PictureTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Picture withUri(String uri) {
        this.uri = uri;
        return this;
    }
}