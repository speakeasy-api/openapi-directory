package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPagePicture
 * The background image for the On Demand page on Vimeo.
**/
public class OnDemandPagePicture {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandPagePicture withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public OnDemandPagePicture withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPagePicture withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("sizes")
    public OnDemandPagePictureSizes[] sizes;
    public OnDemandPagePicture withSizes(OnDemandPagePictureSizes[] sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("type")
    public OnDemandPagePictureTypeEnum type;
    public OnDemandPagePicture withType(OnDemandPagePictureTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPagePicture withUri(String uri) {
        this.uri = uri;
        return this;
    }
}