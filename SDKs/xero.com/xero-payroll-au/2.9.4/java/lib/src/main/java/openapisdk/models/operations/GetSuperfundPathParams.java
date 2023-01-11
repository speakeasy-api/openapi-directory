package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuperfundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SuperFundID")
    public String superFundID;
    public GetSuperfundPathParams withSuperFundId(String superFundID) {
        this.superFundID = superFundID;
        return this;
    }
}