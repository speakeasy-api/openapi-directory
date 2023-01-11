package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostProductRatePlanChargeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Zuora-WSDL-Version")
    public String xZuoraWSDLVersion;
    public ObjectPostProductRatePlanChargeHeaders withXZuoraWsdlVersion(String xZuoraWSDLVersion) {
        this.xZuoraWSDLVersion = xZuoraWSDLVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public ObjectPostProductRatePlanChargeHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public ObjectPostProductRatePlanChargeHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}