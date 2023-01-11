package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPromotionCode {
    @JsonProperty("code")
    public String code;
    public OnDemandPromotionCode withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPromotionCode withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("max_uses")
    public Double maxUses;
    public OnDemandPromotionCode withMaxUses(Double maxUses) {
        this.maxUses = maxUses;
        return this;
    }
    @JsonProperty("uses")
    public Double uses;
    public OnDemandPromotionCode withUses(Double uses) {
        this.uses = uses;
        return this;
    }
}