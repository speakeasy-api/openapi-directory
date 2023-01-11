package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Domain {
    @JsonProperty("allow_hd")
    public Boolean allowHd;
    public Domain withAllowHd(Boolean allowHd) {
        this.allowHd = allowHd;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Domain withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Domain withUri(String uri) {
        this.uri = uri;
        return this;
    }
}