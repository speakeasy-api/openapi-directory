package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EntryTypesApiGetMappedTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entryType")
    public EntryTypesApiGetMappedTagEntryTypeEnum entryType;
    public EntryTypesApiGetMappedTagPathParams withEntryType(EntryTypesApiGetMappedTagEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subType")
    public String subType;
    public EntryTypesApiGetMappedTagPathParams withSubType(String subType) {
        this.subType = subType;
        return this;
    }
}