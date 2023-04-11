import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfoliosVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a video to a portfolio
     */
    addVideoToPortfolio(req: operations.AddVideoToPortfolioRequest, security: operations.AddVideoToPortfolioSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToPortfolioResponse>;
    /**
     * Add a video to a portfolio
     */
    addVideoToPortfolioAlt1(req: operations.AddVideoToPortfolioAlt1Request, security: operations.AddVideoToPortfolioAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideoToPortfolioAlt1Response>;
    /**
     * Remove a video from a portfolio
     */
    deleteVideoFromPortfolio(req: operations.DeleteVideoFromPortfolioRequest, security: operations.DeleteVideoFromPortfolioSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromPortfolioResponse>;
    /**
     * Remove a video from a portfolio
     */
    deleteVideoFromPortfolioAlt1(req: operations.DeleteVideoFromPortfolioAlt1Request, security: operations.DeleteVideoFromPortfolioAlt1Security, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromPortfolioAlt1Response>;
    /**
     * Get a specific video in a portfolio
     */
    getPortfolioVideo(req: operations.GetPortfolioVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideoResponse>;
    /**
     * Get a specific video in a portfolio
     */
    getPortfolioVideoAlt1(req: operations.GetPortfolioVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideoAlt1Response>;
    /**
     * Get all the videos in a portfolio
     */
    getPortfolioVideos(req: operations.GetPortfolioVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideosResponse>;
    /**
     * Get all the videos in a portfolio
     */
    getPortfolioVideosAlt1(req: operations.GetPortfolioVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideosAlt1Response>;
}
