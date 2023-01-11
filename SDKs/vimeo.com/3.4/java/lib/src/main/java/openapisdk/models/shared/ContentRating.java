package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentRating {
    @JsonProperty("code")
    public ContentRatingCodeEnum code;
    public ContentRating withCode(ContentRatingCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ContentRating withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ContentRating withUri(String uri) {
        this.uri = uri;
        return this;
    }
}