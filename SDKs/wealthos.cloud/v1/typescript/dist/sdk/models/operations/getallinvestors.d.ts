import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllInvestorsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Sorting order; results are sorted by creation time.
 */
export declare enum GetAllInvestorsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAllInvestorsRequest extends SpeakeasyBase {
    /**
     * Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageNumber?: string;
    /**
     * Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageSize?: string;
    /**
     * Sorting order; results are sorted by creation time.
     */
    sort?: GetAllInvestorsSortEnum;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllInvestors500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class GetAllInvestors429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class GetAllInvestors403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class GetAllInvestors401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class GetAllInvestors400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorAddress extends SpeakeasyBase {
    addressLine?: string;
    city?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    country: string;
    postalCode: string;
    state?: string;
    streetName?: string;
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorDateOfBirth extends SpeakeasyBase {
    /**
     * two digit string `DD`
     */
    day?: string;
    /**
     * two digit string `MM`
     */
    month?: string;
    /**
     * four digit string `YYYY`
     */
    year?: string;
}
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
/**
 * Status of an investor best describes their personal circumstances.
 */
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorEmploymentStatusEnum {
    Employed = "employed",
    SelfEmployed = "self_employed",
    Pensioner = "pensioner",
    ChildUnder16 = "child_under_16",
    InFullTimeEducation = "in_full_time_education",
    Unemployed = "unemployed",
    CaringForAPersonOver16 = "caring_for_a_person_over_16",
    CaringForAPersonUnder16 = "caring_for_a_person_under_16",
    Other = "other"
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWishSippNominees extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
/**
 * Beneficiary and nominee list of the expression of wish.
 */
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWish extends SpeakeasyBase {
    sippBeneficiaries?: GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWishSippBeneficiaries[];
    sippNominees?: GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWishSippNominees[];
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorIdNumbers extends SpeakeasyBase {
    idNumber: string;
    idType: string;
}
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestorLtaProtectionDetails extends SpeakeasyBase {
    /**
     * Required when the lta_protection_type is ip14 or ip16.
     */
    ltaIndividualProtectionAmount?: string;
    /**
     * Required only when the lta_protection_type is primary
     */
    ltaPrimaryProtectionFactor?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionNotificationNumber?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionSchemeAdministratorReference?: string;
    ltaProtectionType: GetAllInvestors200ApplicationJSONRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
}
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorStatusEnum {
    KycPending = "kyc_pending",
    KycFailed = "kyc_failed",
    Inactive = "inactive",
    Active = "active"
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
 */
export declare enum GetAllInvestors200ApplicationJSONRootTypeForInvestorTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Investor resource type
 */
export declare class GetAllInvestors200ApplicationJSONRootTypeForInvestor extends SpeakeasyBase {
    address: GetAllInvestors200ApplicationJSONRootTypeForInvestorAddress;
    /**
     * Array of bank account IDs
     */
    bankAccounts?: string[];
    createdAt?: Date;
    dateOfBirth: GetAllInvestors200ApplicationJSONRootTypeForInvestorDateOfBirth;
    dealingStatus?: GetAllInvestors200ApplicationJSONRootTypeForInvestorDealingStatusEnum;
    email?: string;
    /**
     * Status of an investor best describes their personal circumstances.
     */
    employmentStatus?: GetAllInvestors200ApplicationJSONRootTypeForInvestorEmploymentStatusEnum;
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    expressionOfWish?: GetAllInvestors200ApplicationJSONRootTypeForInvestorExpressionOfWish;
    firstName: string;
    gender?: string;
    homeNumber?: string;
    idNumbers?: GetAllInvestors200ApplicationJSONRootTypeForInvestorIdNumbers[];
    investorId: string;
    kycAmlStatus?: GetAllInvestors200ApplicationJSONRootTypeForInvestorKycAmlStatusEnum;
    kycAmlStatusLastUpdated?: Date;
    lastName: string;
    /**
     * Additional details of the lifetime allowance protections of the investor
     */
    ltaProtectionDetails?: GetAllInvestors200ApplicationJSONRootTypeForInvestorLtaProtectionDetails[];
    mifidTaxId?: string;
    mobileNumber?: string;
    /**
     * Whether the investor has triggered the Money Purchase Annual Allowance.
     */
    mpaaTriggered?: boolean;
    /**
     * Date of triggering the Money Purchase Annual Allowance. It is required if mpaa_triggered is true.
     */
    mpaaTriggeredDate?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    nationality: string;
    officeNumber?: string;
    referenceVersion?: number;
    /**
     * Intended retirement age of the investor
     */
    retirementAge?: number;
    status?: GetAllInvestors200ApplicationJSONRootTypeForInvestorStatusEnum;
    taxId: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    taxResidence?: GetAllInvestors200ApplicationJSONRootTypeForInvestorTaxResidenceEnum;
    taxResidencyCompliant: boolean;
    title?: string;
    updatedAt?: Date;
}
/**
 * Array of investors
 */
export declare class GetAllInvestors200ApplicationJSON extends SpeakeasyBase {
    investors: GetAllInvestors200ApplicationJSONRootTypeForInvestor[];
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
}
export declare class GetAllInvestorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getAllInvestors200ApplicationJSONObject?: GetAllInvestors200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getAllInvestors400ApplicationJSONObject?: GetAllInvestors400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllInvestors401ApplicationJSONObject?: GetAllInvestors401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllInvestors403ApplicationJSONObject?: GetAllInvestors403ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllInvestors429ApplicationJSONObject?: GetAllInvestors429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllInvestors500ApplicationJSONObject?: GetAllInvestors500ApplicationJSON;
}
