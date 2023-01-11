package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTotalPotValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=investor_id")
    public String investorId;
    public GetTotalPotValuePathParams withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
}