package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSbyDebitMemoItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dmi-id")
    public String dmiId;
    public GetRSbyDebitMemoItemPathParams withDmiId(String dmiId) {
        this.dmiId = dmiId;
        return this;
    }
}