package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCtrlGetLocationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Double accountId;
    public AccountCtrlGetLocationByIdPathParams withAccountId(Double accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public Double locationId;
    public AccountCtrlGetLocationByIdPathParams withLocationId(Double locationId) {
        this.locationId = locationId;
        return this;
    }
}