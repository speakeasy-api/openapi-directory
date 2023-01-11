package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSuperfundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SuperFundID")
    public String superFundID;
    public UpdateSuperfundPathParams withSuperFundId(String superFundID) {
        this.superFundID = superFundID;
        return this;
    }
}