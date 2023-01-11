package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public PutUpdateAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}