package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public DeleteAccountingPeriodPathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}