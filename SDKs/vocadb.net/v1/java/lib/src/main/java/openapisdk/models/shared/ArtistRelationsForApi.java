package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistRelationsForApi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestAlbums")
    public AlbumForApiContract[] latestAlbums;
    public ArtistRelationsForApi withLatestAlbums(AlbumForApiContract[] latestAlbums) {
        this.latestAlbums = latestAlbums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestEvents")
    public ReleaseEventForApiContract[] latestEvents;
    public ArtistRelationsForApi withLatestEvents(ReleaseEventForApiContract[] latestEvents) {
        this.latestEvents = latestEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestSongs")
    public SongForApiContract[] latestSongs;
    public ArtistRelationsForApi withLatestSongs(SongForApiContract[] latestSongs) {
        this.latestSongs = latestSongs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("popularAlbums")
    public AlbumForApiContract[] popularAlbums;
    public ArtistRelationsForApi withPopularAlbums(AlbumForApiContract[] popularAlbums) {
        this.popularAlbums = popularAlbums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("popularSongs")
    public SongForApiContract[] popularSongs;
    public ArtistRelationsForApi withPopularSongs(SongForApiContract[] popularSongs) {
        this.popularSongs = popularSongs;
        return this;
    }
}