package openapisdk.models.shared;


public enum TaskActionTypeEnum {
    APPROVAL("Approval"),
    ATTACHMENT("Attachment"),
    BILLING_BILL_RUN("Billing::BillRun"),
    BILLING_CURRENCY_CONVERSION("Billing::CurrencyConversion"),
    BILLING_CUSTOM_INVOICE("Billing::CustomInvoice"),
    CALLOUT("Callout"),
    CANCEL("Cancel"),
    CREATE("Create"),
    CUSTOM_OBJECT_CREATE("CustomObject::Create"),
    CUSTOM_OBJECT_DELETE("CustomObject::Delete"),
    CUSTOM_OBJECT_QUERY("CustomObject::Query"),
    CUSTOM_OBJECT_UPDATE("CustomObject::Update"),
    DATA_BILLING_PREVIEW_RUN("Data::BillingPreviewRun"),
    DATA_LINK("Data::Link"),
    DELAY("Delay"),
    DELETE("Delete"),
    DOWNLOAD_SFTP("Download::SFTP"),
    EMAIL("Email"),
    EXPORT("Export"),
    FILE_CUSTOM_PDF_CUSTOM_DOCUMENT("File::CustomPDF::CustomDocument"),
    IF("If"),
    INVOICE_GENERATE("InvoiceGenerate"),
    ITERATE("Iterate"),
    LOGIC_CSV_TRANSLATOR("Logic::CSVTranslator"),
    LOGIC_CASE("Logic::Case"),
    LOGIC_CUSTOM_CODE("Logic::CustomCode"),
    LOGIC_JSON_TRANSFORM("Logic::JSONTransform"),
    LOGIC_LAMBDA("Logic::Lambda"),
    LOGIC_RESPONSE_FORMATTER("Logic::ResponseFormatter"),
    LOGIC_XML_TRANSFORM("Logic::XMLTransform"),
    NEW_PRODUCT("NewProduct"),
    NOTIFICATIONS_GOOGLE_CLOUD_PRINT("Notifications::GoogleCloudPrint"),
    NOTIFICATIONS_PHONE_CALL("Notifications::PhoneCall"),
    NOTIFICATIONS_SMS("Notifications::SMS"),
    PAYMENT_GATEWAY_RECONCILIATION("Payment::GatewayReconciliation"),
    PAYMENT_PAYMENT_RUN("Payment::PaymentRun"),
    QUERY("Query"),
    REMOVE_PRODUCT("RemoveProduct"),
    REPORTING_REPORT_DATA("Reporting::ReportData"),
    REPORTING_RUN_REPORT("Reporting::RunReport"),
    RESUME("Resume"),
    SUSPEND("Suspend"),
    UI_PAGE("UI::Page"),
    UI_STOP("UI::Stop"),
    UPDATE("Update"),
    UPLOAD_FTP("Upload::FTP"),
    UPLOAD_SFTP("Upload::SFTP"),
    WRITE_OFF("WriteOff");

    public final String value;

    private TaskActionTypeEnum(String value) {
        this.value = value;
    }
}
