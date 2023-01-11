package openapisdk.models.operations;


public enum ObjectPostImportRequestBodyImportTypeEnum {
    USAGE("Usage"),
    PAYMENT("Payment"),
    QUOTE("Quote"),
    TAXATION_DETAIL("TaxationDetail"),
    UPDATE_ACCOUNTING_CODE("UpdateAccountingCode"),
    CREATE_REVENUE_SCHEDULE("CreateRevenueSchedule"),
    UPDATE_REVENUE_SCHEDULE("UpdateRevenueSchedule"),
    DELETE_REVENUE_SCHEDULE("DeleteRevenueSchedule"),
    IMPORT_FX_RATE("ImportFXRate");

    public final String value;

    private ObjectPostImportRequestBodyImportTypeEnum(String value) {
        this.value = value;
    }
}
