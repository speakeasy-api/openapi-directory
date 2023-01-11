package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tier-id")
    public String tierId;
    public GetTierPathParams withTierId(String tierId) {
        this.tierId = tierId;
        return this;
    }
}