package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistForAlbumForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public ArtistContract artist;
    public ArtistForAlbumForApiContract withArtist(ArtistContract artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ArtistForAlbumForApiContractCategoriesEnum categories;
    public ArtistForAlbumForApiContract withCategories(ArtistForAlbumForApiContractCategoriesEnum categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveRoles")
    public ArtistForAlbumForApiContractEffectiveRolesEnum effectiveRoles;
    public ArtistForAlbumForApiContract withEffectiveRoles(ArtistForAlbumForApiContractEffectiveRolesEnum effectiveRoles) {
        this.effectiveRoles = effectiveRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSupport")
    public Boolean isSupport;
    public ArtistForAlbumForApiContract withIsSupport(Boolean isSupport) {
        this.isSupport = isSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtistForAlbumForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public ArtistForAlbumForApiContractRolesEnum roles;
    public ArtistForAlbumForApiContract withRoles(ArtistForAlbumForApiContractRolesEnum roles) {
        this.roles = roles;
        return this;
    }
}