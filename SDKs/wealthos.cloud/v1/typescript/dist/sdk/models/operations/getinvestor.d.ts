import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetInvestorRequest extends SpeakeasyBase {
    /**
     * Investor Id
     */
    investorId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetInvestor500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestor429ApplicationJSON extends SpeakeasyBase {
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
 * The specified resource was not found
 */
export declare class GetInvestor404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestor403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestor401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestor400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetInvestorRootTypeForInvestorAddress extends SpeakeasyBase {
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
export declare class GetInvestorRootTypeForInvestorDateOfBirth extends SpeakeasyBase {
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
export declare enum GetInvestorRootTypeForInvestorDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
/**
 * Status of an investor best describes their personal circumstances.
 */
export declare enum GetInvestorRootTypeForInvestorEmploymentStatusEnum {
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
export declare class GetInvestorRootTypeForInvestorExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class GetInvestorRootTypeForInvestorExpressionOfWishSippNominees extends SpeakeasyBase {
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
export declare class GetInvestorRootTypeForInvestorExpressionOfWish extends SpeakeasyBase {
    sippBeneficiaries?: GetInvestorRootTypeForInvestorExpressionOfWishSippBeneficiaries[];
    sippNominees?: GetInvestorRootTypeForInvestorExpressionOfWishSippNominees[];
}
export declare class GetInvestorRootTypeForInvestorIdNumbers extends SpeakeasyBase {
    idNumber: string;
    idType: string;
}
export declare enum GetInvestorRootTypeForInvestorKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
export declare enum GetInvestorRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class GetInvestorRootTypeForInvestorLtaProtectionDetails extends SpeakeasyBase {
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
    ltaProtectionType: GetInvestorRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
}
export declare enum GetInvestorRootTypeForInvestorStatusEnum {
    KycPending = "kyc_pending",
    KycFailed = "kyc_failed",
    Inactive = "inactive",
    Active = "active"
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
 */
export declare enum GetInvestorRootTypeForInvestorTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Investor resource type
 */
export declare class GetInvestorRootTypeForInvestor extends SpeakeasyBase {
    address: GetInvestorRootTypeForInvestorAddress;
    /**
     * Array of bank account IDs
     */
    bankAccounts?: string[];
    createdAt?: Date;
    dateOfBirth: GetInvestorRootTypeForInvestorDateOfBirth;
    dealingStatus?: GetInvestorRootTypeForInvestorDealingStatusEnum;
    email?: string;
    /**
     * Status of an investor best describes their personal circumstances.
     */
    employmentStatus?: GetInvestorRootTypeForInvestorEmploymentStatusEnum;
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    expressionOfWish?: GetInvestorRootTypeForInvestorExpressionOfWish;
    firstName: string;
    gender?: string;
    homeNumber?: string;
    idNumbers?: GetInvestorRootTypeForInvestorIdNumbers[];
    investorId: string;
    kycAmlStatus?: GetInvestorRootTypeForInvestorKycAmlStatusEnum;
    kycAmlStatusLastUpdated?: Date;
    lastName: string;
    /**
     * Additional details of the lifetime allowance protections of the investor
     */
    ltaProtectionDetails?: GetInvestorRootTypeForInvestorLtaProtectionDetails[];
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
    status?: GetInvestorRootTypeForInvestorStatusEnum;
    taxId: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    taxResidence?: GetInvestorRootTypeForInvestorTaxResidenceEnum;
    taxResidencyCompliant: boolean;
    title?: string;
    updatedAt?: Date;
}
export declare class GetInvestorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    rootTypeForInvestor?: GetInvestorRootTypeForInvestor;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getInvestor400ApplicationJSONObject?: GetInvestor400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getInvestor401ApplicationJSONObject?: GetInvestor401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getInvestor403ApplicationJSONObject?: GetInvestor403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getInvestor404ApplicationJSONObject?: GetInvestor404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getInvestor429ApplicationJSONObject?: GetInvestor429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getInvestor500ApplicationJSONObject?: GetInvestor500ApplicationJSON;
}
