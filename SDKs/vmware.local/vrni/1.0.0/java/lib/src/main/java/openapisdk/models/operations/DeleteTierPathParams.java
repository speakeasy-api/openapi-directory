package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTierPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tier-id")
    public String tierId;
    public DeleteTierPathParams withTierId(String tierId) {
        this.tierId = tierId;
        return this;
    }
}