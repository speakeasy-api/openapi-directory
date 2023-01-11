package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class SongRatingContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
@SpeakeasyMetadata("form:name=rating")
    public SongRatingContractRatingEnum rating;
    public SongRatingContract withRating(SongRatingContractRatingEnum rating) {
        this.rating = rating;
        return this;
    }
}