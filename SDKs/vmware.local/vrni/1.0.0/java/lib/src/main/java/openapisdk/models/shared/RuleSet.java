package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewall")
    public Reference firewall;
    public RuleSet withFirewall(Reference firewall) {
        this.firewall = firewall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule_set_type")
    public RuleSetRuleSetTypeEnum ruleSetType;
    public RuleSet withRuleSetType(RuleSetRuleSetTypeEnum ruleSetType) {
        this.ruleSetType = ruleSetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public Reference[] rules;
    public RuleSet withRules(Reference[] rules) {
        this.rules = rules;
        return this;
    }
}