import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Coupons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Archive coupon by coupon code
     *
     * @remarks
     * Archives a specifc coupon by its coupon code.
     */
    archivebycouponcode(req: operations.ArchivebycouponcodeRequest, config?: AxiosRequestConfig): Promise<operations.ArchivebycouponcodeResponse>;
    /**
     * Get all coupons
     *
     * @remarks
     *
     * > Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.
     *
     *  Retrieves all coupons from an account.
     */
    getall(req: operations.GetallRequest, config?: AxiosRequestConfig): Promise<operations.GetallResponse>;
    /**
     * Get archived coupon by coupon code
     *
     * @remarks
     * Retrieves a specific archived coupon by its coupon code.
     */
    getarchivedbycouponcode(req: operations.GetarchivedbycouponcodeRequest, config?: AxiosRequestConfig): Promise<operations.GetarchivedbycouponcodeResponse>;
    /**
     * Get coupon by coupon code
     *
     * @remarks
     * Retrieves a specific coupon by its coupon code.
     */
    getbycouponcode(req: operations.GetbycouponcodeRequest, config?: AxiosRequestConfig): Promise<operations.GetbycouponcodeResponse>;
    /**
     * Get coupon usage
     *
     * @remarks
     * Retrieves information about the coupon usage.
     */
    getusage(req: operations.GetusageRequest, config?: AxiosRequestConfig): Promise<operations.GetusageResponse>;
    /**
     * Coupon Massive Generation
     *
     * @remarks
     * Generates a massive amount of coupons
     */
    massiveGeneration(req: operations.MassiveGenerationRequest, config?: AxiosRequestConfig): Promise<operations.MassiveGenerationResponse>;
    /**
     * Unarchive coupon by coupon code
     *
     * @remarks
     * Unarchives a specifc coupon by its coupon code.
     */
    unarchivebycouponcode(req: operations.UnarchivebycouponcodeRequest, config?: AxiosRequestConfig): Promise<operations.UnarchivebycouponcodeResponse>;
    /**
     * Update coupon
     *
     * @remarks
     * Updates information of a specific coupon.
     */
    update(req: operations.UpdateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponse>;
    /**
     * Create coupon
     *
     * @remarks
     * Creates a single new coupon.
     */
    postApiRnbPvtCoupon(req: operations.PostApiRnbPvtCouponRequest, config?: AxiosRequestConfig): Promise<operations.PostApiRnbPvtCouponResponse>;
    /**
     * Create multiple coupons
     *
     * @remarks
     * Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.
     */
    postApiRnbPvtMultipleCoupons(req: operations.PostApiRnbPvtMultipleCouponsRequest, config?: AxiosRequestConfig): Promise<operations.PostApiRnbPvtMultipleCouponsResponse>;
}
