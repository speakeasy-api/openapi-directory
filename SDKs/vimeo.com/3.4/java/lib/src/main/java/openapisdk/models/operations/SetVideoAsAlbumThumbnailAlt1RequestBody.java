package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetVideoAsAlbumThumbnailAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_code")
    public Double timeCode;
    public SetVideoAsAlbumThumbnailAlt1RequestBody withTimeCode(Double timeCode) {
        this.timeCode = timeCode;
        return this;
    }
}