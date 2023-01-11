package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistForArtistForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public ArtistContract artist;
    public ArtistForArtistForApiContract withArtist(ArtistContract artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public ArtistForArtistForApiContractLinkTypeEnum linkType;
    public ArtistForArtistForApiContract withLinkType(ArtistForArtistForApiContractLinkTypeEnum linkType) {
        this.linkType = linkType;
        return this;
    }
}