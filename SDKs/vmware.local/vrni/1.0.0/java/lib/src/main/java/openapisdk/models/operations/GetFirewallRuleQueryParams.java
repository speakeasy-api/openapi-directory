package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetFirewallRuleQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}