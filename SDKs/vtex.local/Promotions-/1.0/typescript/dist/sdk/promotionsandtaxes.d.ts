import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PromotionsAndTaxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Archive Promotion or Tax
     *
     * @remarks
     * Archives a Promotion or Tax by its ID.
     */
    archivePromotion(req: operations.ArchivePromotionRequest, config?: AxiosRequestConfig): Promise<operations.ArchivePromotionResponse>;
    /**
     * Create or Update Promotion or Tax
     *
     * @remarks
     * Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.
     */
    createOrUpdateCalculatorConfiguration(req: operations.CreateOrUpdateCalculatorConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateCalculatorConfigurationResponse>;
    /**
     * Get All Promotions
     *
     * @remarks
     * Retrieves all promotions from an account.
     *
     * > 📘 Onboarding guide
     * >
     * > Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.
     *
     *
     */
    getAllBenefits(req: operations.GetAllBenefitsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllBenefitsResponse>;
    /**
     * Get All Taxes
     *
     * @remarks
     * Retrieves all taxes from an account.
     */
    getAllTaxes(req: operations.GetAllTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllTaxesResponse>;
    /**
     * List Archived Promotions
     *
     * @remarks
     * Lists all archived promotions.
     */
    getArchivedPromotions(req: operations.GetArchivedPromotionsRequest, config?: AxiosRequestConfig): Promise<operations.GetArchivedPromotionsResponse>;
    /**
     * List Archived Taxes
     *
     * @remarks
     * Lists all archived taxes.
     */
    getArchivedTaxes(req: operations.GetArchivedTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetArchivedTaxesResponse>;
    /**
     * Get Promotion or Tax by ID
     *
     * @remarks
     * Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.
     */
    getCalculatorConfigurationById(req: operations.GetCalculatorConfigurationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCalculatorConfigurationByIdResponse>;
    /**
     * Unarchive Promotion or Tax
     *
     * @remarks
     * Unarchives a Promotion or Tax by its ID.
     */
    unarchivePromotion(req: operations.UnarchivePromotionRequest, config?: AxiosRequestConfig): Promise<operations.UnarchivePromotionResponse>;
    /**
     * Create Multiple SKU Promotion
     *
     * @remarks
     * Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.
     * > ⚠️
     * >
     * > The limit of SKUs on a Multiple Effects promotion is 400.
     */
    postApiRnbPvtImportCalculatorConfiguration(req: operations.PostApiRnbPvtImportCalculatorConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostApiRnbPvtImportCalculatorConfigurationResponse>;
    /**
     * Update Multiple SKU Promotion
     *
     * @remarks
     * Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.
     * > ⚠️
     * >
     * > The limit of SKUs on a Multiple Effects promotion is 400.
     */
    putApiRnbPvtImportCalculatorConfigurationPromotionId(req: operations.PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApiRnbPvtImportCalculatorConfigurationPromotionIdResponse>;
}
