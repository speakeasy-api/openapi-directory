package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforDebitMemoItemManualDistributionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dmi-id")
    public String dmiId;
    public PostRSforDebitMemoItemManualDistributionPathParams withDmiId(String dmiId) {
        this.dmiId = dmiId;
        return this;
    }
}