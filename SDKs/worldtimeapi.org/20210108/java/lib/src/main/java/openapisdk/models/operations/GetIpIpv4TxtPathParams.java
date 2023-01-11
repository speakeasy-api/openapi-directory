package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIpIpv4TxtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ipv4")
    public String ipv4;
    public GetIpIpv4TxtPathParams withIpv4(String ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
}