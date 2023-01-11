package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RelatedSongsContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistMatches")
    public SongForApiContract[] artistMatches;
    public RelatedSongsContract withArtistMatches(SongForApiContract[] artistMatches) {
        this.artistMatches = artistMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likeMatches")
    public SongForApiContract[] likeMatches;
    public RelatedSongsContract withLikeMatches(SongForApiContract[] likeMatches) {
        this.likeMatches = likeMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagMatches")
    public SongForApiContract[] tagMatches;
    public RelatedSongsContract withTagMatches(SongForApiContract[] tagMatches) {
        this.tagMatches = tagMatches;
        return this;
    }
}