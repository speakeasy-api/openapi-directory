package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReopenAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public PutReopenAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}