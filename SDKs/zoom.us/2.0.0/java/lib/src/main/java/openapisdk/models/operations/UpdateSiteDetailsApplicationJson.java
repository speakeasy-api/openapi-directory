package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSiteDetailsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateSiteDetailsApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_code")
    public Long siteCode;
    public UpdateSiteDetailsApplicationJson withSiteCode(Long siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}