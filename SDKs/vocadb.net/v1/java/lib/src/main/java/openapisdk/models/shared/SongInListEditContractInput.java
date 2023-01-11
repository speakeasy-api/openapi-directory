package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SongInListEditContractInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public SongInListEditContractInput withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Integer order;
    public SongInListEditContractInput withOrder(Integer order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song")
    public SongForApiContractInput song;
    public SongInListEditContractInput withSong(SongForApiContractInput song) {
        this.song = song;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songInListId")
    public Integer songInListId;
    public SongInListEditContractInput withSongInListId(Integer songInListId) {
        this.songInListId = songInListId;
        return this;
    }
}