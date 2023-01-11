package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneSites200ApplicationJsonSites {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public ListPhoneSites200ApplicationJsonSitesCountry country;
    public ListPhoneSites200ApplicationJsonSites withCountry(ListPhoneSites200ApplicationJsonSitesCountry country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListPhoneSites200ApplicationJsonSites withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("main_auto_receptionist")
    public ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist mainAutoReceptionist;
    public ListPhoneSites200ApplicationJsonSites withMainAutoReceptionist(ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist mainAutoReceptionist) {
        this.mainAutoReceptionist = mainAutoReceptionist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPhoneSites200ApplicationJsonSites withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_code")
    public String siteCode;
    public ListPhoneSites200ApplicationJsonSites withSiteCode(String siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}