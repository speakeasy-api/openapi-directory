package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPendingCloseAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public PutPendingCloseAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}