package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyRatings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaa")
    public UploadVideoRequestBodyRatingsMpaa mpaa;
    public UploadVideoRequestBodyRatings withMpaa(UploadVideoRequestBodyRatingsMpaa mpaa) {
        this.mpaa = mpaa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tv")
    public UploadVideoRequestBodyRatingsTv tv;
    public UploadVideoRequestBodyRatings withTv(UploadVideoRequestBodyRatingsTv tv) {
        this.tv = tv;
        return this;
    }
}