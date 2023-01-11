package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAutoReceptionistApplicationJson {
    @JsonProperty("name")
    public String name;
    public AddAutoReceptionistApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public AddAutoReceptionistApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}