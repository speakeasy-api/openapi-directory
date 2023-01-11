package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=investor_id")
    public String investorId;
    public GetPotsPathParams withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
}