package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetADevice200ApplicationJsonProvisionSipAccountsSharedLine
 * Return additional provisioning information with generic device SIP credentials.
**/
public class GetADevice200ApplicationJsonProvisionSipAccountsSharedLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLine withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_subscription")
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription lineSubscription;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLine withLineSubscription(GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription lineSubscription) {
        this.lineSubscription = lineSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_caller_id")
    public String outboundCallerId;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLine withOutboundCallerId(String outboundCallerId) {
        this.outboundCallerId = outboundCallerId;
        return this;
    }
}