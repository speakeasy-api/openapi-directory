package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SongInListForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public SongInListForApiContract withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Integer order;
    public SongInListForApiContract withOrder(Integer order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song")
    public SongForApiContract song;
    public SongInListForApiContract withSong(SongForApiContract song) {
        this.song = song;
        return this;
    }
}