package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTupdateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Zuora-WSDL-Version")
    public String xZuoraWSDLVersion;
    public ActionPosTupdateHeaders withXZuoraWsdlVersion(String xZuoraWSDLVersion) {
        this.xZuoraWSDLVersion = xZuoraWSDLVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public ActionPosTupdateHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public ActionPosTupdateHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}