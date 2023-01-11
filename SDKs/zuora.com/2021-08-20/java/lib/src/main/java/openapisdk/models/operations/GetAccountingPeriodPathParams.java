package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public GetAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}