package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InformationalUrl
 * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
**/
public class InformationalUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketing")
    public String marketing;
    public InformationalUrl withMarketing(String marketing) {
        this.marketing = marketing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public String privacy;
    public InformationalUrl withPrivacy(String privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support")
    public String support;
    public InformationalUrl withSupport(String support) {
        this.support = support;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsOfService")
    public String termsOfService;
    public InformationalUrl withTermsOfService(String termsOfService) {
        this.termsOfService = termsOfService;
        return this;
    }
}