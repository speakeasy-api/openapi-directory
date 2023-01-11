package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInvestorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=investor_id")
    public String investorId;
    public UpdateInvestorPathParams withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
}