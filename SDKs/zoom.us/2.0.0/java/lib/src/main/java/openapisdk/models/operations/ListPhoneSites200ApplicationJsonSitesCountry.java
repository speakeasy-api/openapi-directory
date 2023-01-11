package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPhoneSites200ApplicationJsonSitesCountry
 * Site country
**/
public class ListPhoneSites200ApplicationJsonSitesCountry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ListPhoneSites200ApplicationJsonSitesCountry withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPhoneSites200ApplicationJsonSitesCountry withName(String name) {
        this.name = name;
        return this;
    }
}