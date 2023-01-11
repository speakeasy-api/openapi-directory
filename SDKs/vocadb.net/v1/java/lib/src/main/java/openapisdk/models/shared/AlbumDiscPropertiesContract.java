package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AlbumDiscPropertiesContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discNumber")
    public Integer discNumber;
    public AlbumDiscPropertiesContract withDiscNumber(Integer discNumber) {
        this.discNumber = discNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AlbumDiscPropertiesContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public AlbumDiscPropertiesContractMediaTypeEnum mediaType;
    public AlbumDiscPropertiesContract withMediaType(AlbumDiscPropertiesContractMediaTypeEnum mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlbumDiscPropertiesContract withName(String name) {
        this.name = name;
        return this;
    }
}