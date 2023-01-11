package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetASite200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public GetASite200ApplicationJsonCountry country;
    public GetASite200ApplicationJson withCountry(GetASite200ApplicationJsonCountry country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetASite200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("main_auto_receptionist")
    public GetASite200ApplicationJsonMainAutoReceptionist mainAutoReceptionist;
    public GetASite200ApplicationJson withMainAutoReceptionist(GetASite200ApplicationJsonMainAutoReceptionist mainAutoReceptionist) {
        this.mainAutoReceptionist = mainAutoReceptionist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetASite200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_extension")
    public GetASite200ApplicationJsonShortExtension shortExtension;
    public GetASite200ApplicationJson withShortExtension(GetASite200ApplicationJsonShortExtension shortExtension) {
        this.shortExtension = shortExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_code")
    public Long siteCode;
    public GetASite200ApplicationJson withSiteCode(Long siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}