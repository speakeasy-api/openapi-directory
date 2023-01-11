package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistForSongContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public ArtistContract artist;
    public ArtistForSongContract withArtist(ArtistContract artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ArtistForSongContractCategoriesEnum categories;
    public ArtistForSongContract withCategories(ArtistForSongContractCategoriesEnum categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveRoles")
    public ArtistForSongContractEffectiveRolesEnum effectiveRoles;
    public ArtistForSongContract withEffectiveRoles(ArtistForSongContractEffectiveRolesEnum effectiveRoles) {
        this.effectiveRoles = effectiveRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ArtistForSongContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCustomName")
    public Boolean isCustomName;
    public ArtistForSongContract withIsCustomName(Boolean isCustomName) {
        this.isCustomName = isCustomName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSupport")
    public Boolean isSupport;
    public ArtistForSongContract withIsSupport(Boolean isSupport) {
        this.isSupport = isSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtistForSongContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public ArtistForSongContractRolesEnum roles;
    public ArtistForSongContract withRoles(ArtistForSongContractRolesEnum roles) {
        this.roles = roles;
        return this;
    }
}