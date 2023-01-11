package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforDebitMemoItemDistributeByDateRangePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dmi-id")
    public String dmiId;
    public PostRSforDebitMemoItemDistributeByDateRangePathParams withDmiId(String dmiId) {
        this.dmiId = dmiId;
        return this;
    }
}