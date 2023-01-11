package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetApplicationTierPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tier-id")
    public String tierId;
    public GetApplicationTierPathParams withTierId(String tierId) {
        this.tierId = tierId;
        return this;
    }
}