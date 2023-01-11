package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlbumPicture
 * The custom logo for this album.
**/
public class AlbumPicture {
    @JsonProperty("active")
    public Boolean active;
    public AlbumPicture withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public AlbumPicture withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public AlbumPicture withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("sizes")
    public AlbumPictureSizes[] sizes;
    public AlbumPicture withSizes(AlbumPictureSizes[] sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("type")
    public AlbumPictureTypeEnum type;
    public AlbumPicture withType(AlbumPictureTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public AlbumPicture withUri(String uri) {
        this.uri = uri;
        return this;
    }
}