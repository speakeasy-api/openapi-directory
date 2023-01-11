package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMassUpdaterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bulk-key")
    public String bulkKey;
    public GetMassUpdaterPathParams withBulkKey(String bulkKey) {
        this.bulkKey = bulkKey;
        return this;
    }
}