import { SpeakeasyBase } from "../../../internal/utils";
/**
 * set of types for which this category can be selected
 */
export declare enum CategoryDTOSupportedClassesEnum {
    Project = "PROJECT",
    Quote = "QUOTE",
    QuoteTask = "QUOTE_TASK",
    Task = "TASK",
    Provider = "PROVIDER",
    Customer = "CUSTOMER",
    CustomerPerson = "CUSTOMER_PERSON",
    ProviderPerson = "PROVIDER_PERSON",
    FinancialReport = "FINANCIAL_REPORT",
    Reminder = "REMINDER",
    ProviderInvoice = "PROVIDER_INVOICE",
    CustomerInvoice = "CUSTOMER_INVOICE",
    ProjectGroup = "PROJECT_GROUP"
}
/**
 * group of things (ie. customers or projects) similar in some way (ie. VIP customers)
 */
export declare class CategoryDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    /**
     * should this value be set by default in XTRF selection lists
     */
    default?: boolean;
    /**
     * internal identifier
     */
    id?: number;
    /**
     * localised name (formatted in the current user's locale)
     */
    name?: string;
    /**
     * should this value be available on the top of XTRF selection lists, in the Preferred section
     */
    preferred?: boolean;
    /**
     * set of types for which this category can be selected
     */
    supportedClasses?: CategoryDTOSupportedClassesEnum[];
}
