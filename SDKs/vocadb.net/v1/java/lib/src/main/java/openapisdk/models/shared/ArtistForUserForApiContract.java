package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistForUserForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public ArtistForApiContract artist;
    public ArtistForUserForApiContract withArtist(ArtistForApiContract artist) {
        this.artist = artist;
        return this;
    }
}