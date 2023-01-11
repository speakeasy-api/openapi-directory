package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolDeletePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}