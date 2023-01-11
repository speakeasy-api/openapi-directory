package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistForEventContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public ArtistContract artist;
    public ArtistForEventContract withArtist(ArtistContract artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveRoles")
    public ArtistForEventContractEffectiveRolesEnum effectiveRoles;
    public ArtistForEventContract withEffectiveRoles(ArtistForEventContractEffectiveRolesEnum effectiveRoles) {
        this.effectiveRoles = effectiveRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ArtistForEventContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtistForEventContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public ArtistForEventContractRolesEnum roles;
    public ArtistForEventContract withRoles(ArtistForEventContractRolesEnum roles) {
        this.roles = roles;
        return this;
    }
}