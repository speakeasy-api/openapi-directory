package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SongInAlbumForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discNumber")
    public Integer discNumber;
    public SongInAlbumForApiContract withDiscNumber(Integer discNumber) {
        this.discNumber = discNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongInAlbumForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongInAlbumForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song")
    public SongForApiContract song;
    public SongInAlbumForApiContract withSong(SongForApiContract song) {
        this.song = song;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackNumber")
    public Integer trackNumber;
    public SongInAlbumForApiContract withTrackNumber(Integer trackNumber) {
        this.trackNumber = trackNumber;
        return this;
    }
}