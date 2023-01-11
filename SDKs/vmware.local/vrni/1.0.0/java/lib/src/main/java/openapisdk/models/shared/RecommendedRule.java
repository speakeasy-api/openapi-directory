package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecommendedRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public RecommendedRuleActionEnum action;
    public RecommendedRule withAction(RecommendedRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Reference[] destinations;
    public RecommendedRule withDestinations(Reference[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port_ranges")
    public SimplePortRange[] portRanges;
    public RecommendedRule withPortRanges(SimplePortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public String[] protocols;
    public RecommendedRule withProtocols(String[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Reference[] sources;
    public RecommendedRule withSources(Reference[] sources) {
        this.sources = sources;
        return this;
    }
}