package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCloseAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public PutCloseAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}